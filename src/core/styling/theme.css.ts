import { createTheme } from '@vanilla-extract/css';
import { colors as colorTokens } from './tokens/colors';
import { borderRadius as borderRadiusTokens } from './tokens/borderRadius';
import { spacing as spacingTokens } from './tokens/spacing';

export const [themeClass, vars] = createTheme({
  color: colorTokens,
  borderRadius: borderRadiusTokens,
  spacing: spacingTokens,
});

export const { color: colors, borderRadius: borderRadiuses, spacing } = vars;
