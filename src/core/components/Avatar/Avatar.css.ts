import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
});

export const image = style({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
});
