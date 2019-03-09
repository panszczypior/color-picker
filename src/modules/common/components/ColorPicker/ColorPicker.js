import React from 'react';
import Button from '../Button';
import Input from '../Input';
import ColorList from '../ColorList';

const ColorPicker = ({
  colors,
  onColorSelected,
  onQueryChange,
  onAcceptColor,
  ...rest
}) => {
  return (
    <>
      <Input onChange={onQueryChange} />
      <ColorList colors={colors} onColorSelected={onColorSelected} {...rest} />
      <Button onClick={onAcceptColor}>Accept</Button>
    </>
  );
};

export default ColorPicker;
