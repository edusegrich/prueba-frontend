import { formFieldBase } from '@core/styling';
import { style } from '@vanilla-extract/css';

const resetInput = style({
  selectors: {
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
});

export const input = style([resetInput, formFieldBase]);
