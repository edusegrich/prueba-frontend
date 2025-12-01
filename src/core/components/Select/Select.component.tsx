import { type FC } from 'react';

import { select } from './Select.css';
import type { SelectProps } from './Select.types';
import { SelectContext } from './hooks/useSelectContext';
import { useSelectState } from './hooks/useSelectState';

const Select: FC<SelectProps> = ({ children }) => {
  const state = useSelectState();
  return (
    <SelectContext.Provider value={state}>
      <div className={select}>{children}</div>
    </SelectContext.Provider>
  );
};

export default Select;
