import styled from '@emotion/styled';

export const Button = styled.button`
  background: #f7df1e;
  width: 100%;
  color: black;
  display: block;
  height: 3rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  cursor: pointer;

  &:focus {
    boxshadow: none;
    outline: none;
  }
`;

export default Button;
