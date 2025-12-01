import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { useSelectContext } from '../../hooks/useSelectContext';

import { selectTrigger } from './SelectTrigger.css';
import usePosition from '../../hooks/usePosition';

export type SelectTriggerProps = {
  children: ReactNode;
};

const SelectTrigger: FC<SelectTriggerProps> = ({ children }) => {
  usePosition();
  const { open, setOpen, triggerRef, setTriggerRef } = useSelectContext();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerRef) {
      setTriggerRef(ref);
    }
  }, [triggerRef, setTriggerRef]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={selectTrigger} onClick={handleClick}>
      {children}
    </div>
  );
};

export default SelectTrigger;
