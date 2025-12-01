import { spacing } from '@core/styling';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  gap: spacing[6],
  padding: `${spacing[8]} ${spacing[32]}`,
});
