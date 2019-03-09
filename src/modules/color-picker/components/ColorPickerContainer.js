import React, { useState } from 'react';
import { connect } from 'react-redux';
import activeColor from '../../active-color';
import common from '../../common';
import * as selectors from '../../selectors';

const {
  components: { Button, Input }
} = common;

const ColorPickerContainer = ({ colors, setActiveColor }) => {
  const [selectedColor, selectColor] = useState({});

  const handleAcceptColor = () => {
    setActiveColor(selectedColor);
  };
  const handleColorSelected = color => selectColor(color);

  return (
    <div>
      <Input onChange={() => ({})} />
      <ul>
        {colors.map(({ name, hex }) => (
          <li key={`${hex}${name}`}>
            <Button onClick={() => handleColorSelected({ name, hex })}>
              {name}
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={handleAcceptColor}>accept</Button>
    </div>
  );
};

export default connect(
  state => ({
    colors: selectors.getVisibleSelectors(state)
  }),
  dispatch => ({
    setActiveColor: color => dispatch(activeColor.actions.setActiveColor(color))
  })
)(ColorPickerContainer);
