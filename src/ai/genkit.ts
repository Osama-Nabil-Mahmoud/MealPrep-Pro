import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  // باستخدام المعرف الكامل للموديل لضمان التوافق مع SDK 1.x
  model: 'googleai/gemini-1.5-flash',
});
