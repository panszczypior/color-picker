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
    return (
      <Layout>
        <ColorPickerContainer />
      </Layout>
    );
  }
}

export default connect(
  null,
  { fetchColors: colorpicker.actions.fetchColors }
)(App);
