import { style } from '@vanilla-extract/css';
import { borderRadiuses, colors, spacing } from '../theme.css';

export const formFieldBase = style({
  textAlign: 'start',
  alignContent: 'center',
  boxSizing: 'border-box',
  height: spacing[10],
  padding: `${spacing[0]}${spacing[2]}`,
  border: 'solid',
  borderRadius: borderRadiuses.md,
  borderWidth: '1px',
  borderColor: colors.gray[600],
  fontSize: '16px',
});
