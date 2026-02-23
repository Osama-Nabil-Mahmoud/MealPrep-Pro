import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

/**
 * إعداد Genkit باستخدام الموديل الأكثر استقراراً.
 */
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-1.5-flash',
});
