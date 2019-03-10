import React from 'react';
import { Button as StyledButton } from './Button.ui';

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
