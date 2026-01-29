
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getDentalAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'SMILE-AI', a modern, high-energy virtual dental assistant for 'Creating Dental Excellence'. You help users understand dental procedures like implants, veneers, and orthodontics. You focus on 'performance dentistry' and 'clinical excellence'. Keep answers concise, professional, and energetic. Always encourage the user to book a consultation for specific medical advice.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm experiencing a bit of a technical glitch, but our team is ready to help you! Please book a consultation for direct support.";
  }
};
