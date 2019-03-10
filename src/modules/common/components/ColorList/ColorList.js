import React from 'react';
import { List, Item, ColorThumb, ColorLabel } from './ColorList.ui';

const ColorList = ({ colors, onColorSelected, selectedColor }) => {
  return (
    <List>
      {colors.map(color => (
        <Item
          key={`${color.hex}${color.name}`}
          color={color.hex}
          active={selectedColor.hex === color.hex}
          onClick={() => onColorSelected(color)}
        >
          <ColorThumb color={color.hex} />
          <ColorLabel>{color.name}</ColorLabel>
        </Item>
      ))}
    </List>
  );
};

export default ColorList;
