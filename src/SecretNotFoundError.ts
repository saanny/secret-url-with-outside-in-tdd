export class SecretNotFoundError extends Error {
    constructor() {
        super("Secret was not found");
        this.name = "SecretNotFoundError";
    }
}