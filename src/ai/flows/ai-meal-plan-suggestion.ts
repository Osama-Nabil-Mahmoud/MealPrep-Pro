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
  tag: z.string().describe('A tag or category for the meal.'),
});

const AiMealPlanSuggestionInputSchema = z.object({
  dietaryGoal: z.string().describe('The user\'s dietary goal (e.g., "weight loss", "muscle gain", "keto", "vegan", "healthy eating").'),
  availableMeals: z.array(MealSchema).describe('An array of available meals from the gallery.'),
});
export type AiMealPlanSuggestionInput = z.infer<typeof AiMealPlanSuggestionInputSchema>;

const AiMealPlanSuggestionOutputSchema = z.object({
  suggestedMealPlan: z.array(MealSchema).min(3).max(5).describe('A suggested meal plan consisting of 3 to 5 meals.'),
});
export type AiMealPlanSuggestionOutput = z.infer<typeof AiMealPlanSuggestionOutputSchema>;

export async function suggestMealPlan(input: AiMealPlanSuggestionInput): Promise<AiMealPlanSuggestionOutput> {
  try {
    return await aiMealPlanSuggestionFlow(input);
  } catch (error) {
    console.error('Genkit Flow Error:', error);
    throw new Error('فشل الذكاء الاصطناعي في معالجة طلبك. يرجى التأكد من إعدادات الاتصال.');
  }
}

const mealPlanPrompt = ai.definePrompt({
  name: 'mealPlanSuggestionPrompt',
  input: {schema: AiMealPlanSuggestionInputSchema},
  output: {schema: AiMealPlanSuggestionOutputSchema},
  prompt: `أنت خبير تغذية ومخطط وجبات لدى "MealPrep Pro". مهمتك هي اقتراح خطة وجبات مناسبة لمستخدم جديد بناءً على هدفه الغذائي وقائمة الوجبات المتاحة لدينا.

الهدف الغذائي للمستخدم هو: {{{dietaryGoal}}}

قائمة الوجبات المتاحة لدينا:
{{#each availableMeals}}
- الوجبة: {{{title}}}, السعرات: {{calories}}, الماكروز: {{{macros}}}, التصنيف: {{{tag}}}
{{/each}}

يرجى اختيار من 3 إلى 5 وجبات من القائمة أعلاه تتوافق بشكل أفضل مع هدف المستخدم. 
يجب أن تختار فقط من الوجبات المذكورة ولا تقم بابتكار وجبات جديدة.
يجب أن يكون الرد بصيغة JSON تحتوي على مصفوفة الوجبات المختارة بنفس الهيكل الموضح.`,
});

const aiMealPlanSuggestionFlow = ai.defineFlow(
  {
    name: 'aiMealPlanSuggestionFlow',
    inputSchema: AiMealPlanSuggestionInputSchema,
    outputSchema: AiMealPlanSuggestionOutputSchema,
  },
  async input => {
    const {output} = await mealPlanPrompt(input);
    if (!output) throw new Error('AI failed to generate a meal plan');
    return output;
  }
);
