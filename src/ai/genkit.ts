import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  // Using the full provider/model identifier to avoid 404s
  model: 'googleai/gemini-1.5-flash',
});
