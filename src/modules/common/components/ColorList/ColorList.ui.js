import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 2rem 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 1rem;
  margin: 0;
  border: 2px solid transparent;
  cursor: pointer;
  border-color: ${({ active, color }) => active && color};
`;

export const ColorThumb = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  background-color: ${({ color }) => color};
`;

export const ColorLabel = styled.span``;
