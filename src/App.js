import React, { Component } from 'react';
import { connect } from 'react-redux';
import activeColor from './modules/active-color';
import colorpicker from './modules/color-picker';

const {
  components: { Layout }
} = activeColor;

const {
  components: { ColorPickerContainer }
} = colorpicker;

class App extends Component {
  componentDidMount = () => {
    const { fetchColors } = this.props;
    fetchColors();
  };

  render() {
    const { activeColor: color } = this.props;
    return (
      <Layout activeColor={color}>
        <ColorPickerContainer />
      </Layout>
    );
  }
}

export default connect(
  ({ activeColor: color }) => ({
    activeColor: color
  }),
  { fetchColors: colorpicker.actions.fetchColors }
)(App);
