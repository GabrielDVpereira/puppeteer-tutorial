import { GitUser, GitRepo } from "../../domain/entitites";
import { LoadGitRepoInfoRepository } from "../../domain/repository";
import { GitService } from "../protocols/git_service";

export class LoadGitRepoInfoRepositoryImp implements LoadGitRepoInfoRepository {
    constructor(private readonly gitService: GitService){}

    load(user: GitUser): Promise<GitRepo[]> {
         return this.gitService.getUserRepoInfo(user)
    }

}