export type UserDto = {
  id: string;
  login: string;
  name: string;
  type: 'User';
  avatarUrl: string;
  htmlUrl: string;
};

export type UsersState = {
  searchText: string;
  setSearchText: (text: string) => void;
  users: UserDto[];
  set: (users: UserDto[]) => void;
  page: number;
  setPage: (p: number) => void;
  resetPage: () => void;
};
