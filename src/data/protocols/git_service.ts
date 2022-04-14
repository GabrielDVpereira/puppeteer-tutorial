import { GitRepo, GitUser } from "../../domain/entitites";
export interface GitService {
    getUserRepoInfo(user: GitUser): Promise<GitRepo[]> 
}