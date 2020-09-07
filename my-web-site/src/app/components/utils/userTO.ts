import { RepositoryTO } from './repositoryTO';

export class UserTO {
    name: string;
    bio: string;
    avatar_url: string;
    login: string;
    repos_url: string;
    repository: RepositoryTO[];

}