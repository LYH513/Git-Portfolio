import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GitHubState {
  connected: boolean;
  githubName: string | null;
  setGitHubStatus: (connected: boolean, githubName: string | null) => void;
  clearGitHubStatus: () => void;
}

export const useGitHubStore = create<GitHubState>()(
  persist(
    set => ({
      connected: false,
      githubName: null,
      setGitHubStatus: (connected, githubName) => set({ connected, githubName }),
      clearGitHubStatus: () => set({ connected: false, githubName: null }),
    }),
    { name: 'github-storage' },
  ),
);



