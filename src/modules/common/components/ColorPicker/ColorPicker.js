import React from 'react';
import Button from '../Button';
import Input from '../Input';
import ColorList from '../ColorList';

const ColorPicker = ({
  colors,
  selectedColor,
  onColorSelected,
  onQueryChange,
  onAcceptColor
}) => {
  return (
    <>
      <Input onChange={onQueryChange} />
      <ColorList
        colors={colors}
        onColorSelected={onColorSelected}
        selectedColor={selectedColor}
      />
      <Button onClick={onAcceptColor}>Accept</Button>
    </>
  );
};

export default ColorPicker;
