import { useState, type RefObject } from 'react';
import type { Position } from './usePosition';

export const useSelectState = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const [triggerRef, setTriggerRef] = useState<RefObject<HTMLDivElement | null>>();
  const [contentRef, setContentRef] = useState<RefObject<HTMLDivElement | null>>();

  return {
    open,
    setOpen,
    value,
    setValue,
    position,
    setPosition,
    triggerRef,
    setTriggerRef,
    contentRef,
    setContentRef,
  };
};
