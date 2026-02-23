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
    const { output } = await ai.generate({
      model: 'googleai/gemini-1.5-flash',
      prompt: `أنت خبير تغذية ومخطط وجبات لدى "MealPrep Pro". مهمتك هي اقتراح خطة وجبات مناسبة لمستخدم جديد بناءً على هدفه الغذائي وقائمة الوجبات المتاحة لدينا.

الهدف الغذائي للمستخدم هو: ${input.dietaryGoal}

قائمة الوجبات المتاحة لدينا:
${input.availableMeals.map(m => `- الوجبة: ${m.title}, السعرات: ${m.calories}, الماكروز: ${m.macros}, التصنيف: ${m.tag}`).join('\n')}

يرجى اختيار من 3 إلى 5 وجبات من القائمة أعلاه تتوافق بشكل أفضل مع هدف المستخدم. 
يجب أن تختار فقط من الوجبات المذكورة ولا تقم بابتكار وجبات جديدة.`,
      output: { schema: AiMealPlanSuggestionOutputSchema },
    });

    if (!output) {
      throw new Error('لم يتمكن الذكاء الاصطناعي من توليد اقتراح. يرجى المحاولة مرة أخرى.');
    }

    return output;
  }
);

export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  try {
    return await suggestMealPlanFlow(input);
  } catch (error: any) {
    console.error('Genkit Error:', error);
    throw new Error(error.message || 'حدث خطأ في الاتصال بمحرك الذكاء الاصطناعي.');
  }
}
