import * as readline from "readline";
import { AskQuestionService } from "../../application/services/ask-question-service";
import { OpenAIAdapter } from "../../infrastructure/ai/open-ai-adapter";
import { documentContext } from "../../shared/constants";
import { QuestionProcessingError } from "../../shared/errors";

export class CliApp {
    private askQuestionService: AskQuestionService;

    constructor(apiKey: string) {
        const openAIAdapter = new OpenAIAdapter(apiKey);
        this.askQuestionService = new AskQuestionService(openAIAdapter, documentContext);
    }

    start() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        console.log("Ask the bot a question about XTech Corporation:");
        rl.on("line", async (input) => {
            const trimmedInput = input.trim();
            if (trimmedInput.toLowerCase() === "exit") {
                console.log("Goodbye!");
                rl.close();
            } else {
                try {
                    const answer = await this.askQuestionService.execute(trimmedInput);
                    console.log(`\nAnswer: ${answer}\n`);
                } catch (error) {
                    if (error instanceof QuestionProcessingError) {
                        console.error(`Error: ${error.message}`);
                    } else {
                        console.error("An unexpected error occurred. Please try again.");
                    }
                }
                console.log("Ask another question or type 'exit' to quit:");
            }
        });
    }
}