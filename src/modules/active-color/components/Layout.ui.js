import styled from '@emotion/styled';
import hexToRGBA from '../../../utils/hexToRGBA';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ color }) => hexToRGBA(color, 0.2)};
`;

export const ColorName = styled.span`
  color: ${({ color }) => color};
`;
