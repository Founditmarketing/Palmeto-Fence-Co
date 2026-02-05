import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

// Initialize the Gemini AI client
// Ensure process.env.API_KEY is available in your environment variables
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I am currently offline (API Key missing). Please call our office directly at (912) 555-0199.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Map internal history format to the API's expected format if needed,
    // though the structure passed in should align with the SDK's expectations for chat history.
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later or use the contact form.";
  }
};
