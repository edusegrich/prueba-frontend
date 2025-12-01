import type { FC, ReactNode } from 'react';

import { container } from './Container.css';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default Container;
