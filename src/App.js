import React, { Component } from 'react';
import { connect } from 'react-redux';
import activeColor from './modules/active-color';
import colorpicker from './modules/colorpicker';
import './App.css';

const {
  components: { Layout }
} = activeColor;

class App extends Component {
  componentDidMount = () => {
    const { fetchColors } = this.props;
    fetchColors();
  };

  render() {
    return <Layout />;
  }
}

export default connect(
  null,
  { fetchColors: colorpicker.actions.fetchColors }
)(App);
