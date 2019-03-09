import React from 'react';
import { Input as StyledInput } from './Input.ui';

const Input = ({ onChange }) => {
  return <StyledInput onChange={onChange} />;
};

export default Input;
