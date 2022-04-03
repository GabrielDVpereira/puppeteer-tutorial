import { GitUser, GitRepo } from "../../domain/entitites";
import { LoadGitRepoInfoRepository } from "../../domain/repository";

export class LoadGitRepoInfoRepositoryImp implements LoadGitRepoInfoRepository {
    load(user: GitUser): GitRepo[] {
        throw new Error("Method not implemented.");
    }

}