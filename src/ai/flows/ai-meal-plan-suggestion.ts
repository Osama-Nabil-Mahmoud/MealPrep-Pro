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
  availableMeals: z.array(MealSchema).describe('قائمة الوجبات المتاحة للاختيار منها.'),
});
export type AiMealPlanSuggestionInput = z.infer<typeof AiMealPlanSuggestionInputSchema>;

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5).describe('خطة مقترحة من 3 إلى 5 وجبات من القائمة المتاحة فقط.'),
});
export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

/**
 * تعريف البرومبت باستخدام Genkit 1.x
 */
const suggestMealPlanPrompt = ai.definePrompt({
  name: 'suggestMealPlanPrompt',
  input: { schema: AiMealPlanSuggestionInputSchema },
  output: { schema: AiMealPlanSuggestionOutputSchema },
  prompt: `أنت خبير تغذية متخصص في شركة "MealPrep Pro".
هدفك هو اختيار أفضل الوجبات من القائمة المتاحة لتناسب هدف المستخدم: "{{{dietaryGoal}}}".

قائمة الوجبات المتاحة (يجب أن تختار من هذه القائمة فقط):
{{#each availableMeals}}
- {{{title}}} ({{{calories}}} سعرة، {{{macros}}})
{{/each}}

المطلوب: اختر من 3 إلى 5 وجبات متنوعة تناسب هدف المستخدم تماماً.`,
});

/**
 * تعريف الـ Flow
 */
const suggestMealPlanFlow = ai.defineFlow(
  {
    name: 'suggestMealPlanFlow',
    inputSchema: AiMealPlanSuggestionInputSchema,
    outputSchema: AiMealPlanSuggestionOutputSchema,
  },
  async (input) => {
    // التحقق من مفتاح الـ API في البيئة
    if (!process.env.GOOGLE_GENAI_API_KEY) {
      throw new Error('API_KEY_MISSING');
    }

    try {
      const { output } = await suggestMealPlanPrompt(input);
      if (!output) throw new Error('AI_FAILED');
      return output;
    } catch (err: any) {
      console.error('Genkit Error:', err);
      throw err;
    }
  }
);

/**
 * دالة التصدير للواجهة الأمامية
 */
export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  try {
    return await suggestMealPlanFlow(input);
  } catch (error: any) {
    if (error.message === 'API_KEY_MISSING') {
      throw new Error('مفتاح الذكاء الاصطناعي غير موجود. يرجى التأكد من إضافة GOOGLE_GENAI_API_KEY.');
    }
    throw new Error(error.message || 'حدث خطأ غير متوقع أثناء معالجة طلبك.');
  }
}
