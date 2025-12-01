import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { useSelectContext } from '../../hooks/useSelectContext';

import { content } from './SelectContent.css';

export type SelectContentProps = {
  children: ReactNode;
};

const SelectContent: FC<SelectContentProps> = ({ children }) => {
  const { open, contentRef, setContentRef, position } = useSelectContext();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef) {
      setContentRef(ref);
    }
  }, [contentRef, setContentRef]);

  if (!open) return null;
  return (
    <div
      className={content}
      style={{
        top: position?.top,
        left: position?.left,
        width: position?.width,
        // opacity: isVisible ? 1 : 0,
        // pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default SelectContent;
