import {ClientError} from "./ClientError.mjs";

class InvariantError extends ClientError{
    constructor(message) {
        super(message);
        this.name = 'InvariantError';
    }
}

export {InvariantError};