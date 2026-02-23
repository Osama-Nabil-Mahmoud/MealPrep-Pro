'use server';
/**
 * @fileOverview نظام ذكاء اصطناعي لاقتراح الوجبات بناءً على الأهداف الغذائية.
 * يستخدم هذا الملف Genkit 1.x API الرسمي.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MealSchema = z.object({
  title: z.string().describe('اسم الوجبة باللغة العربية.'),
  calories: z.number().describe('عدد السعرات الحرارية التقريبي.'),
  macros: z.string().describe('توزيع الماكروز (بروتين، كارب، دهون).'),
  tag: z.string().describe('تصنيف الوجبة.'),
});

const AiMealPlanSuggestionInputSchema = z.object({
  dietaryGoal: z.string().describe('الهدف الغذائي للمستخدم (خسارة وزن، بناء عضل، إلخ).'),
  availableMeals: z.array(MealSchema).describe('قائمة الوجبات الـ 20 المتاحة للاختيار منها.'),
});
export type AiMealPlanSuggestionInput = z.infer<typeof AiMealPlanSuggestionInputSchema>;

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5).describe('خطة مقترحة من 3 إلى 5 وجبات من القائمة المتاحة فقط.'),
});
export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

/**
 * تعريف البرومبت باستخدام Genkit 1.x
 * نستخدم Handlebars لتمرير البيانات بشكل آمن ومفهوم للذكاء الاصطناعي.
 */
const suggestMealPlanPrompt = ai.definePrompt({
  name: 'suggestMealPlanPrompt',
  input: { schema: AiMealPlanSuggestionInputSchema },
  output: { schema: AiMealPlanSuggestionOutputSchema },
  prompt: `أنت خبير تغذية متخصص في شركة "MealPrep Pro" في مصر.

هدفك هو اختيار أفضل الوجبات من القائمة المتاحة لتناسب هدف المستخدم: "{{{dietaryGoal}}}".

قائمة الوجبات المتاحة (يجب أن تختار من هذه القائمة فقط):
{{#each availableMeals}}
- {{{title}}} ({{{calories}}} سعرة، {{{macros}}})
{{/each}}

المطلوب:
1. اختر من 3 إلى 5 وجبات تناسب هدف المستخدم.
2. تأكد من تنوع الوجبات (مثلاً: إفطار، غداء، عشاء).
3. التزم بالأسماء والبيانات الموجودة في القائمة المتاحة تماماً.`,
});

/**
 * تعريف الـ Flow الذي يربط البرومبت بالمنطق البرمجي.
 */
const suggestMealPlanFlow = ai.defineFlow(
  {
    name: 'suggestMealPlanFlow',
    inputSchema: AiMealPlanSuggestionInputSchema,
    outputSchema: AiMealPlanSuggestionOutputSchema,
  },
  async (input) => {
    // التحقق من وجود مفتاح الـ API لتقديم رسالة خطأ واضحة
    if (!process.env.GOOGLE_GENAI_API_KEY) {
      throw new Error('مفتاح GOOGLE_GENAI_API_KEY غير موجود في إعدادات البيئة.');
    }

    try {
      const { output } = await suggestMealPlanPrompt(input);
      if (!output) {
        throw new Error('لم يتمكن الذكاء الاصطناعي من توليد رد صحيح.');
      }
      return output;
    } catch (err: any) {
      console.error('AI Processing Error:', err);
      throw err;
    }
  }
);

/**
 * دالة التصدير لاستخدامها في الواجهة الأمامية.
 */
export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  try {
    return await suggestMealPlanFlow(input);
  } catch (error: any) {
    console.error('Flow execution failed:', error);
    
    // معالجة الأخطاء الشائعة بشكل مفهوم
    if (error.message?.includes('404') || error.message?.includes('not found')) {
      throw new Error('عذراً، الموديل غير متوفر حالياً أو الاسم غير صحيح. يرجى مراجعة إعدادات الموديل.');
    }
    
    if (error.message?.includes('API_KEY')) {
      throw new Error('مفتاح الذكاء الاصطناعي غير صحيح أو غير مضاف. يرجى إضافته في إعدادات المشروع.');
    }

    throw new Error(error.message || 'حدث خطأ غير متوقع أثناء معالجة طلبك.');
  }
}
