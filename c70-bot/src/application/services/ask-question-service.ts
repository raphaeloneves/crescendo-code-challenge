import { Question } from "../../domain/models/question";
import { IAIProvider } from "../../infrastructure/ai/ai-provider";
import {QuestionProcessingError} from "../../shared/errors";

export class AskQuestionService {
    private aiProvider: IAIProvider;
    private context: string;

    constructor(aiProvider: IAIProvider, context: string) {
        this.aiProvider = aiProvider;
        this.context = context;
    }

    async execute(questionContent: string): Promise<string> {
        try {
            const question = new Question(questionContent);
            return await this.aiProvider.ask(question.value, this.context);
        } catch (error) {
            if (error instanceof Error) {
                throw new QuestionProcessingError(
                    `Failed to process the question: "${questionContent}". Reason: ${error.message}`
                );
            }
            throw error;
        }
    }
}