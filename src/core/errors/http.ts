export class HttpError extends Error {
    constructor(stack?: string){
        super('Error to perform request')
        this.name = 'Http Error'
        this.stack = stack
    }
}