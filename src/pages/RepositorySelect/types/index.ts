export interface Repository {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  htmlUrl: string;
  isPrivate: boolean;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  openIssuesCount: number;
  defaultBranch: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
}

