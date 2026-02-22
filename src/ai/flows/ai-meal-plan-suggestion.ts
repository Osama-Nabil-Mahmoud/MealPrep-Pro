'use server';
/**
 * @fileOverview An AI agent that suggests meal plans based on dietary goals.
 *
 * - suggestMealPlan - A function that handles the meal plan suggestion process.
 * - AiMealPlanSuggestionInput - The input type for the suggestMealPlan function.
 * - AiMealPlanSuggestionOutput - The return type for the suggestMealPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MealSchema = z.object({
  title: z.string().describe('The name of the meal in Arabic.'),
  calories: z.number().describe('The estimated calorie count of the meal.'),
  macros: z.string().describe('The macronutrient breakdown (e.g., "P:30g, C:40g, F:15g").'),
  tag: z.string().describe('A tag or category for the meal (e.g., "غداء/عشاء", "إفطار", "نباتي", "كيتو").'),
});

const AiMealPlanSuggestionInputSchema = z.object({
  dietaryGoal: z.string().describe('The user\'s dietary goal (e.g., "weight loss", "muscle gain", "keto", "vegan", "healthy eating").'),
  availableMeals: z.array(MealSchema).describe('An array of available meals from the gallery, each with title, calories, macros, and tag.'),
});
export type AiMealPlanSuggestionInput = z.infer<typeof AiMealPlanSuggestionInputSchema>;

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5).describe('A suggested meal plan consisting of 3 to 5 meals that align with the user\'s dietary goal, selected from the available meals.'),
});
export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  return aiMealPlanSuggestionFlow(input);
}

const mealPlanPrompt = ai.definePrompt({
  name: 'mealPlanSuggestionPrompt',
  input: {schema: AiMealPlanSuggestionInputSchema},
  output: {schema: AiMealPlanSuggestionOutputSchema},
  prompt: `أنت خبير تغذية ومخطط وجبات لدى "MealPrep Pro". مهمتك هي اقتراح خطة وجبات مناسبة لمستخدم جديد بناءً على هدفه الغذائي وقائمة الوجبات المتاحة.

الهدف الغذائي للمستخدم هو: {{{dietaryGoal}}}

قائمة الوجبات المتاحة (في صيغة JSON):
{{{JSON.stringify availableMeals}}}

يرجى اختيار من 3 إلى 5 وجبات من قائمة "availableMeals" تتوافق بشكل أفضل مع الهدف الغذائي للمستخدم "خدمة MealPrep Pro"، مع مراعاة التنوع والتوازن. يجب أن يكون الإخراج JSON صالحًا ويحتوي فقط على قائمة الوجبات المقترحة التي تتبع نفس بنية الكائن في "availableMeals".

مثال لـ "availableMeals" لتوضيح البنية:
[
    { "title": "دجاج مشوي مع أرز وخضار", "calories": 450, "macros": "P:35g, C:40g, F:15g", "tag": "غداء/عشاء" },
    { "title": "سلمون مع بطاطس حلوة", "calories": 500, "macros": "P:30g, C:45g, F:20g", "tag": "غداء/عشاء" }
]

تأكد من أن الوجبات التي تختارها موجودة بالفعل في قائمة "availableMeals" المقدمة وأنك لا تختلق وجبات جديدة.
`,
});

const aiMealPlanSuggestionFlow = ai.defineFlow(
  {
    name: 'aiMealPlanSuggestionFlow',
    inputSchema: AiMealPlanSuggestionInputSchema,
    outputSchema: AiMealPlanSuggestionOutputSchema,
  },
  async input => {
    const {output} = await mealPlanPrompt(input);
    return output!;
  }
);
