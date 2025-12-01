import { colors, spacing } from '@core/styling';
import { style } from '@vanilla-extract/css';

export const header = style({
  textAlign: 'start',
  height: spacing[12],
  backgroundColor: colors.gray[100],
});
