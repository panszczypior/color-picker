import styled from '@emotion/styled';
import hexToRGBA from '../../../utils/hexToRGBA';

export const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ color }) => hexToRGBA(color, 0.2)};
`;

export const ColorName = styled.span`
  color: ${({ color }) => color};
`;

export const FloatingContainer = styled.aside`
  position: absolute;
  width: 30rem;
  top: 50%;
  transform: translateY(-50%);
  right: 8rem;
`;
