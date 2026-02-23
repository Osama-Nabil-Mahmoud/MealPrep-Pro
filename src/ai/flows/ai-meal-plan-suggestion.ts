'use server';
/**
 * @fileOverview An AI agent that suggests meal plans based on dietary goals.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MealSchema = z.object({
  title: z.string().describe('The name of the meal in Arabic.'),
  calories: z.number().describe('The estimated calorie count of the meal.'),
  macros: z.string().describe('The macronutrient breakdown (e.g., "P:30g, C:40g, F:15g").'),
  tag: z.string().describe('A tag or category for the meal.'),
});

const AiMealPlanSuggestionInputSchema = z.object({
  dietaryGoal: z.string().describe('The user\'s dietary goal.'),
  availableMeals: z.array(MealSchema).describe('An array of available meals.'),
});
export type AiMealPlanSuggestionInput = z.infer<typeof AiMealPlanSuggestionInputSchema>;

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5).describe('A suggested meal plan consisting of 3 to 5 meals.'),
});
export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

/**
 * AI Meal Plan Suggestion Flow
 */
const suggestMealPlanFlow = ai.defineFlow(
  {
    name: 'suggestMealPlanFlow',
    inputSchema: AiMealPlanSuggestionInputSchema,
    outputSchema: AiMealPlanSuggestionOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await ai.generate({
        // Using the default model defined in genkit.ts
        prompt: `أنت خبير تغذية لدى "MealPrep Pro".
الهدف الغذائي للمستخدم هو: ${input.dietaryGoal}

قائمة الوجبات المتاحة (اختر منها فقط):
${input.availableMeals.map(m => `- ${m.title} (${m.calories} سعرة, ${m.macros})`).join('\n')}

يرجى اقتراح من 3 إلى 5 وجبات تناسب هذا الهدف من القائمة المذكورة فقط.`,
        output: { schema: AiMealPlanSuggestionOutputSchema },
      });

      if (!output) {
        throw new Error('لم يتم توليد اقتراح.');
      }

      return output;
    } catch (err: any) {
      console.error('AI Generation Error:', err);
      throw new Error(err.message || 'حدث خطأ أثناء معالجة البيانات.');
    }
  }
);

export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  try {
    return await suggestMealPlanFlow(input);
  } catch (error: any) {
    console.error('Flow Execution Error:', error);
    throw new Error(error.message || 'فشل المساعد الذكي في الاستجابة حالياً.');
  }
}
