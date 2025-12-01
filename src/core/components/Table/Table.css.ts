import { borderRadiuses, colors, spacing } from '@core/styling';
import { style } from '@vanilla-extract/css';

const baseTable = style({
  width: '100%',
  minWidth: '480px',
  maxHeight: '650px',
  height: 'fit-content',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: borderRadiuses.md,
  borderColor: colors.gray[300],
  borderCollapse: 'separate',
  textAlign: 'start',
});

export const table = style([
  baseTable,
  {
    height: 'fit-content',
  },
]);

export const emptyTable = style([
  baseTable,
  {
    height: '650px',
    textAlign: 'center',
  },
]);

export const td = style({
  padding: `${spacing[2]} ${spacing[2]}`,
});
