import type { FC } from 'react';
import { Select } from '@components/Select';

const PagesSelect: FC = () => {
  return (
    <Select>
      <Select.Trigger>Seleccionar</Select.Trigger>
      <Select.Content>
        <Select.Option value="1">Uno</Select.Option>
        <Select.Option value="2">Dos</Select.Option>
      </Select.Content>
    </Select>
  );
};

export default PagesSelect;
