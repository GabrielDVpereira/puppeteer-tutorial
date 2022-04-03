import { GitRepo, GitUser } from "../entitites";

export interface LoadGitRepoInfoRepository {
    load(user: GitUser): GitRepo[]
}