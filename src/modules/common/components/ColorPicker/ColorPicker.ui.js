import styled from '@emotion/styled';
import hexToRGB from '../../../../utils/hexToRGBA';

const ColorPickerWrapper = styled.div`
  background: linear-gradient(to bottom, #cccccc, ${hexToRGB('#cccccc', 0.6)});
  padding: 1rem;
  height: 100%;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  boxshadow: 3px 3px 20px 3px ${hexToRGB('#cccccc', 0.2)};
`;

export { ColorPickerWrapper as default, ColorPickerWrapper };
