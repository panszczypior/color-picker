import React from 'react';
import { Button as StyledButton } from './Button.ui';

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
