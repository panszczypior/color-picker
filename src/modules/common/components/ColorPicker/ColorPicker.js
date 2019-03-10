import React from 'react';
import Button from '../Button';
import Input from '../Input';
import ColorList from '../ColorList';
import { ColorPickerWrapper } from './ColorPicker.ui';

const ColorPicker = ({
  colors,
  selectedColor,
  onColorSelected,
  onQueryChange,
  onAcceptColor
}) => {
  return (
    <ColorPickerWrapper>
      <Input onChange={onQueryChange} />
      <ColorList
        colors={colors}
        onColorSelected={onColorSelected}
        selectedColor={selectedColor}
      />
      <Button onClick={onAcceptColor}>Accept</Button>
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
