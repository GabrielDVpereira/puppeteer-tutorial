export interface Http {
    get<T>(options: HttpOptions): Promise<HttpRespose<T>>
}

export interface HttpOptions {
    url: string;
    config?: any;
}

export interface HttpRespose<T = any> {
    data?: T
    status: Status
    error?: Error
}

export enum Status {
    OK = 200,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500, 
    NO_AUTHENTICATED = 403,
    NO_AUTHORIZED = 401
}

