import { GitRepo, GitUser } from "../entitites";
import { LoadGitRepoInfoRepository } from "../repository";
export class ListUserReposInfo implements UseCase<GitUser, GitRepo[]> {
    constructor(private readonly loadGitRepoInfoRepository: LoadGitRepoInfoRepository){}
    async execute(user: GitUser): Promise<GitRepo[]> {
        return this.loadGitRepoInfoRepository.load(user); 
    }
}