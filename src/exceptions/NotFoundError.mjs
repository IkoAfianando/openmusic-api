import {ClientError} from "./ClientError.mjs";

class NotFoundError extends ClientError {
    constructor(message) {
        super(message, 404);
        this.name = 'NotFoundError';
    }
}

export {NotFoundError};