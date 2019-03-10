import React, { useState } from 'react';
import { connect } from 'react-redux';
import activeColor from '../../active-color';
import searchQuery from '../../search-query';
import common from '../../common';
import * as selectors from '../../selectors';

const {
  components: { ColorPicker }
} = common;

const ColorPickerContainer = ({
  colors,
  setActiveColor,
  updateSearchQuery
}) => {
  const [selectedColor, selectColor] = useState({});

  const handleAcceptColor = () => {
    setActiveColor(selectedColor);
  };
  const handleColorSelected = color => selectColor(color);

  const handleQueryChange = ({ target: { value } }) => updateSearchQuery(value);

  return (
    <div>
      <ColorPicker
        colors={colors}
        selectedColor={selectedColor}
        onColorSelected={handleColorSelected}
        onQueryChange={handleQueryChange}
        onAcceptColor={handleAcceptColor}
      />
    </div>
  );
};

export default connect(
  state => ({
    colors: selectors.getVisibleSelectors(state)
  }),
  dispatch => ({
    setActiveColor: color =>
      dispatch(activeColor.actions.setActiveColor(color)),
    updateSearchQuery: query =>
      dispatch(searchQuery.actions.updateSearchQuery(query))
  })
)(ColorPickerContainer);
