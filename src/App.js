import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import colorpicker from './modules/color-picker';
import common from './modules/common';

const {
  components: { Layout }
} = common;

const {
  components: { ColorPickerContainer }
} = colorpicker;

const App = ({ fetchColors, activeColor: color }) => {
  useEffect(() => {
    fetchColors();
  }, []);
  return (
    <Layout activeColor={color}>
      <ColorPickerContainer />
    </Layout>
  );
};

export default connect(
  ({ activeColor: color }) => ({
    activeColor: color
  }),
  { fetchColors: colorpicker.actions.fetchColors }
)(App);
