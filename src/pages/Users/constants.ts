import LinkCell from './components/LinkCell';
import LoginCell from './components/LoginCell';
import TextCell from './components/TextCell';

export enum UsersTableColumnUid {
  Login = 'login',
  Type = 'type',
  ProfileUrl = 'profileUrl',
}

export const COLUMNS = [
  {
    uid: UsersTableColumnUid.Login,
    label: 'Username',
  },
  {
    uid: UsersTableColumnUid.Type,
    label: 'Type',
  },
  {
    uid: UsersTableColumnUid.ProfileUrl,
    label: 'Profile',
  },
];

export const USER_CELL_COMPONENT = {
  [UsersTableColumnUid.Login]: LoginCell,
  [UsersTableColumnUid.Type]: TextCell,
  [UsersTableColumnUid.ProfileUrl]: LinkCell,
};
