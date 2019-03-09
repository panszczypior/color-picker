import React from 'react';
import { List, Item, ColorThumb, ColorLabel } from './ColorList.ui';

const ColorList = ({ colors, onColorSelected }) => {
  return (
    <List>
      {colors.map(color => (
        <Item
          key={`${color.hex}${color.name}`}
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
