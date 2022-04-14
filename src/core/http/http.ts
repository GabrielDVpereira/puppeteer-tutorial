import { AxiosInstance, AxiosError } from "axios";
import { apiInstance } from "../../config/axios";
import { HttpError } from "../errors/http";
import { Http, HttpOptions, HttpRespose, Status } from "../protocols/http";


export class Api implements Http {
    private readonly api: AxiosInstance; 

    constructor(baseURL: string){
        this.api = apiInstance(baseURL)
    }

    async get<T>({ url, config}: HttpOptions): Promise<HttpRespose<T>> {
        try{
            const reponse = await this.api.get<T>(url, config); 
            return { data: reponse.data, status: Status.OK }

        } catch(error) {
           const err = error as AxiosError; 
           return  {  error: new HttpError(err.stack), status: err.response?.status || Status.SERVER_ERROR }
        }
    }
}