export interface IAIProvider {
    ask(question: string, context: string): Promise<string>;
}