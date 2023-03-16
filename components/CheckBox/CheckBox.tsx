import * as React from 'react';
import { CheckBoxBase } from '../CheckBox/Style';

export const CheckBox = (props): JSX.Element => {
  const { value, onChange } = props;
  return (
    <CheckBoxBase
      type="checkbox"
      value={value}
      onChange={(event) => onChange(event.target.checked)}
    />
  );
};
