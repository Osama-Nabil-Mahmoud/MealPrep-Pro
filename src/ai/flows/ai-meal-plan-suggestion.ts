'use server';

/**
 * @fileOverview AI system to suggest meal plans using direct fetch to Gemini API v1.
 * Author: Senior Full-Stack Engineer
 */

import { z } from 'zod';

// التكوين الأساسي للموديلات
const PRIMARY_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
const FALLBACK_MODELS = ['gemini-1.5-pro', 'gemini-1.5-flash'];

const MealSchema = z.object({
  title: z.string().describe('اسم الوجبة بالعربي'),
  calories: z.number().describe('السعرات الحرارية'),
  macros: z.string().describe('توزيع الماكروز (بروتين، كارب، دهون)'),
  tag: z.string().describe('تصنيف الوجبة'),
});

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5),
});

export type AiMealPlanSuggestionInput = {
  dietaryGoal: string;
  availableMeals: any[];
};

export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

/**
 * وظيفة داخلية للاتصال بـ Gemini API v1 باستخدام fetch
 */
async function fetchGemini(model: string, prompt: string, apiKey: string) {
  const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        response_mime_type: "application/json",
        temperature: 0.7,
      }
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return { 
      ok: false, 
      status: response.status, 
      error: errorData?.error?.message || response.statusText 
    };
  }

  const data = await response.json();
  try {
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResponse) throw new Error('Empty response');
    
    // تنظيف النص في حال وجود markdown
    const cleanedJson = textResponse.replace(/```json|```/g, '').trim();
    return { ok: true, data: JSON.parse(cleanedJson) };
  } catch (e) {
    return { ok: false, error: 'فشل في تحليل بيانات الرد من الذكاء الاصطناعي.' };
  }
}

/**
 * الدالة الرئيسية مع نظام الـ Fallback
 */
export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('مفتاح الذكاء الاصطناعي مش موجود. يا ريت تضيف GOOGLE_GENAI_API_KEY في الإعدادات.');
  }

  const prompt = `أنت خبير تغذية في "MealPrep Pro".
هدفك هو اختيار أحسن وجبات من القائمة المتاحة عشان تناسب هدف المستخدم: "${input.dietaryGoal}".

الوجبات المتاحة (اختار منها بس):
${input.availableMeals.map(m => `- ${m.title} (${m.calories} cal, ${m.macros})`).join('\n')}

المطلوب: اختار من 3 لـ 5 وجبات متنوعة.
الرد لازم يكون بصيغة JSON فقط كالتالي:
{
  "suggestedMealPlan": [
    { "title": "...", "calories": 0, "macros": "...", "tag": "..." }
  ]
}`;

  // المحاولة الأولى مع الموديل الأساسي
  let result = await fetchGemini(PRIMARY_MODEL, prompt, apiKey);

  // نظام الـ Fallback في حالة الـ 404 أو الأخطاء المحددة
  if (!result.ok) {
    console.warn(`Primary model ${PRIMARY_MODEL} failed: ${result.error}. Trying fallbacks...`);
    
    for (const model of FALLBACK_MODELS) {
      result = await fetchGemini(model, prompt, apiKey);
      if (result.ok) break;
      console.warn(`Fallback model ${model} failed too.`);
    }
  }

  if (result.ok) {
    const validated = AiMealPlanSuggestionOutputSchema.safeParse(result.data);
    if (validated.success) return validated.data;
    throw new Error('الرد اللي جالي مش مطابق للشكل المطلوب، جرب تاني.');
  }

  // معالجة رسائل الخطأ النهائية بالعربية المصرية
  if (result.status === 404) {
    throw new Error('الموديل غير متاح حالياً، جرب تغير GEMINI_MODEL في الـ env أو استنى شوية.');
  }
  
  throw new Error(result.error || 'حصلت مشكلة وأنا بحاول أعملك خطة الأكل، جرب تاني كمان شوية.');
}
