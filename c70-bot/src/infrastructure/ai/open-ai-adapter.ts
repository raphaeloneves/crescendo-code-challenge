import { OpenAI } from "openai";
import { IAIProvider } from "./ai-provider";
import { AIProviderError } from "../../shared/errors";

export class OpenAIAdapter implements IAIProvider {
    private openai: OpenAI;

    constructor(apiKey: string) {
        this.openai = new OpenAI({ apiKey });
    }

    async ask(question: string, context: string): Promise<string> {
        try {
            const response = await this.openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assistant who answers questions strictly based on the provided document.",
                    },
                    {
                        role: "user",
                        content: `Document: ${context}\n\nQuestion: ${question}`,
                    },
                ],
                max_tokens: 300,
            });

            return response.choices[0].message?.content || "No answer available.";
        } catch (error) {
            throw new AIProviderError("An error occurred while interacting with the AI provider. Please try again later.");
        }
    }
}