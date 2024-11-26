import {ValidationError} from "../../shared/errors";

export class Question {
    private content: string;

    constructor(content: string) {
        if (!content?.trim()) {
            throw new ValidationError("Question content cannot be empty.");
        }
        this.content = content;
    }

    get value(): string {
        return this.content;
    }
}