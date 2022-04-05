import { GitRepo, GitUser } from "../entitites";

export interface LoadGitRepoInfoRepository {
    load(user: GitUser): Promise<GitRepo[]>
}