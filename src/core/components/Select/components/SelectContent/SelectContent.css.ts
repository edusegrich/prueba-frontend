import { formFieldBase } from '@core/styling';
import { style } from '@vanilla-extract/css';

export const content = style([
  formFieldBase,
  {
    position: 'absolute',
    zIndex: 9999,
  },
]);
