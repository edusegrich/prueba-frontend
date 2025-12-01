import { formFieldBase } from '@core/styling';
import { style } from '@vanilla-extract/css';

export const selectTrigger = style([
  formFieldBase,
  {
    cursor: 'pointer',
  },
]);
