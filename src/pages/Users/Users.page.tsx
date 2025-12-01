import type { FC } from 'react';

import { TextInput } from '@core/components';
import UsersTable from './components/UsersTable';
import Container from './components/Container';
import PagesSelect from './components/PagesSelect';
import Header from './components/Header';
import useUsersStore from '@core/store';

export const Users: FC = () => {
  const searchText = useUsersStore((s) => s.searchText);
  const onChange = useUsersStore((s) => s.setSearchText);
  const resetPage = useUsersStore((s) => s.resetPage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetPage();
    onChange(e.target.value);
  };

  return (
    <Container>
      <Header>
        <TextInput
          placeholder="Type the user name..."
          autoComplete="off"
          name="no-autofill"
          value={searchText}
          onChange={handleChange}
        />
        <PagesSelect />
      </Header>
      <div>
        <UsersTable />
      </div>
    </Container>
  );
};
