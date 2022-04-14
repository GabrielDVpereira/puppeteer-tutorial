import { Api } from "../../../core/http/http";
import { GitUser, GitRepo } from "../../../domain/entitites";
import { GitService } from "../../protocols/git_service";

export class GitHttpService implements GitService {
    constructor(private readonly api: Api){}

   async getUserRepoInfo(user: GitUser): Promise<GitRepo[]> {
       const reponse = await this.api.get<GitRepo[]>('GIT URL'); 
        return reponse.data!;
    }
    
}