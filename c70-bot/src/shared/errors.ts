export class AIProviderError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AIProviderError";
    }
}

export class QuestionProcessingError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "QuestionProcessingError";
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}