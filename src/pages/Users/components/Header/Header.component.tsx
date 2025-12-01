import type { FC, ReactNode } from 'react';

import { header } from './Header.css';

const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={header}>{children}</div>;
};

export default Header;
