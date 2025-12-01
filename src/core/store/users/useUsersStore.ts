import { create } from 'zustand/react';
import type { UserDto, UsersState } from './users.types';

export const useUsersStore = create<UsersState>()((set) => ({
  searchText: '',
  setSearchText: (text: string) => set((state) => ({ ...state, searchText: text })),
  users: [],
  set: (users: UserDto[]) => set((state) => ({ ...state, users })),
  page: 1,
  setPage: (p: number) => set((state) => ({ ...state, page: p })),
  resetPage: () => set((state) => ({ ...state, page: 1 })),
}));
