import SelectComponent from './Select.component';
import type { SelectProps, SelectSubComponentsProps } from './Select.types';
import SelectTrigger from './components/SelectTrigger';
import SelectContent from './components/SelectContent';
import SelectOption from './components/SelectOption';

export const Select = Object.assign(SelectComponent, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Option: SelectOption,
}) as React.FC<SelectProps> & SelectSubComponentsProps;
