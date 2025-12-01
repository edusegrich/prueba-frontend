import { forwardRef } from 'react';
import type { TextInputProps } from './TextInput.types';

import { input } from './TextInput.css';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { value, placeholder, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={input}
      type="text"
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
});

export default TextInput;
