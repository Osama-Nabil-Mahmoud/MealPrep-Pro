'use server';
/**
 * @fileOverview AI system to suggest meal plans based on dietary goals.
 * Uses the official Genkit 1.x API.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MealSchema = z.object({
  title: z.string().describe('The name of the meal in Arabic.'),
  calories: z.number().describe('Approximate number of calories.'),
  macros: z.string().describe('Macros distribution (Protein, Carbs, Fats).'),
  tag: z.string().describe('Meal category/tag.'),
});

const AiMealPlanSuggestionInputSchema = z.object({
  dietaryGoal: z.string().describe('The user’s dietary goal (weight loss, muscle gain, etc.).'),
  availableMeals: z.array(MealSchema).describe('List of available meals to choose from.'),
});
export type AiMealPlanSuggestionInput = z.infer<typeof AiMealPlanSuggestionInputSchema>;

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5).describe('A suggested plan of 3 to 5 meals from the available list only.'),
});
export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

/**
 * Defining the Prompt using Genkit 1.x
 */
const suggestMealPlanPrompt = ai.definePrompt({
  name: 'suggestMealPlanPrompt',
  input: { schema: AiMealPlanSuggestionInputSchema },
  output: { schema: AiMealPlanSuggestionOutputSchema },
  prompt: `You are an expert nutritionist at "MealPrep Pro".
Your goal is to select the best meals from the available list to fit the user's goal: "{{{dietaryGoal}}}".

Available meals list (You MUST choose from this list only):
{{#each availableMeals}}
- {{{title}}} ({{{calories}}} cal, {{{macros}}})
{{/each}}

Task: Choose 3 to 5 diverse meals that perfectly fit the user's goal. Respond in Arabic for titles and labels.`,
});

/**
 * Defining the Flow
 */
const suggestMealPlanFlow = ai.defineFlow(
  {
    name: 'suggestMealPlanFlow',
    inputSchema: AiMealPlanSuggestionInputSchema,
    outputSchema: AiMealPlanSuggestionOutputSchema,
  },
  async (input) => {
    // Check for the API key in the environment
    if (!process.env.GOOGLE_GENAI_API_KEY && !process.env.GEMINI_API_KEY) {
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
 * Export function for the frontend
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
