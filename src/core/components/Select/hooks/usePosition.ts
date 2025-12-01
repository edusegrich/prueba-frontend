import { useCallback, useLayoutEffect, useState } from 'react';
import { useSelectContext } from './useSelectContext';

export type Position = { top: number; left: number; width: number };

const usePosition = () => {
  const { open, setPosition, contentRef, triggerRef } = useSelectContext();
  const [dropdownHeight, setDropdownHeight] = useState(0);

  useLayoutEffect(() => {
    const content = contentRef?.current;
    if (!content) return;

    setDropdownHeight(content.offsetHeight);
  }, [open, contentRef]);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const content = contentRef?.current;
    if (!trigger || !content) return;

    const rect = trigger.getBoundingClientRect();
    const width = rect.width;
    const spacing = 12;
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    const shouldPlaceAbove = spaceBelow < dropdownHeight && spaceAbove > dropdownHeight;

    setPosition({
      top: shouldPlaceAbove
        ? rect.top - dropdownHeight - spacing + window.scrollY
        : rect.bottom + spacing + window.scrollY,
      left: rect.left + window.scrollX,
      width,
    });
  }, [dropdownHeight, triggerRef, contentRef, setPosition]);

  useLayoutEffect(() => {
    if (open && dropdownHeight > 0) {
      updatePosition();
    } else if (!open) {
      setPosition(null);
    }
  }, [open, dropdownHeight, updatePosition, setPosition]);
};

export default usePosition;
