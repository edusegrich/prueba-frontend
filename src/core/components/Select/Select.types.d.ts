import type { ReactNode } from 'react';
import type { SelectTriggerProps } from './components/SelectTrigger';
import type { SelectContentProps } from './components/SelectContent';
import type { SelectOptionProps } from './components/SelectOption';
import type { Position } from './hooks/usePosition';

export type SelectProps = {
  children: ReactNode;
};

export type SelectContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string | null;
  setValue: (value: string | null) => void;
  position: Position | null;
  setPosition: (position: Position | null) => void;
  triggerRef: RefObject<HTMLDivElement | null>;
  setTriggerRef: (ref: RefObject<HTMLDivElement | null>) => void;
  contentRef: RefObject<HTMLDivElement | null>;
  setContentRef: (ref: RefObject<HTMLDivElement | null>) => void;
};

export type SelectSubComponentsProps = {
  Trigger: React.FC<SelectTriggerProps>;
  Content: React.FC<SelectContentProps>;
  Option: React.FC<SelectOptionProps>;
};
