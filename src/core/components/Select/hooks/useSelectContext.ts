import { createContext, useContext } from 'react';
import type { SelectContextProps } from '../Select.types';

export const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Select subcomponents must be used within <Select>');
  }
  return context;
};
