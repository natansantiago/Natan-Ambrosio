
import { GoogleGenAI } from "@google/genai";

// Function to generate legal guidance using Gemini API
export const getLegalGuidance = async (userMessage: string) => {
  // Initialize the GenAI client using process.env.API_KEY directly as required
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are an AI assistant for "Natan Ambrosio Advocacia", a premium law firm specializing in Healthcare Law. 
    Your tone is professional, empathetic, and authoritative.
    Your goal is to provide general information about healthcare legal topics such as:
    - Medical Malpractice
    - HIPAA Compliance
    - Patient Rights
    - Healthcare Regulatory Compliance
    - Insurance Disputes
    
    IMPORTANT: You MUST include a disclaimer that you are an AI and not an attorney, and this information does not constitute legal advice. 
    Encourage the user to book a consultation with the firm's actual attorneys for specific legal counsel.
    Keep answers concise and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the generated text property directly from the response
    return response.text || "Sinto muito, não consegui processar sua solicitação. Por favor, entre em contato conosco diretamente pelo telefone 12 98161 6121.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Nosso assistente está temporariamente indisponível. Por favor, ligue para 12 98161 6121 para assistência imediata.";
  }
};
