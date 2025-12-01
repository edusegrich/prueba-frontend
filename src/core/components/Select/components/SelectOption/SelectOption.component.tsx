import type { FC, ReactNode } from 'react';
import { useSelectContext } from '../../hooks/useSelectContext';

export type SelectOptionProps = {
  children: ReactNode;
  value: string;
};

const SelectOption: FC<SelectOptionProps> = ({ children, value }) => {
  const { setValue } = useSelectContext();
  const handleClick = () => {
    setValue(value);
  };
  return <div onClick={handleClick}>{children}</div>;
};

export default SelectOption;
