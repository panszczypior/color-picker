import React, { Component } from 'react';
import { connect } from 'react-redux';
import colorpicker from './modules/colorpicker';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    const { fetchColors } = this.props;
    fetchColors();
  };

  render() {
    return <div className="App">text</div>;
  }
}

export default connect(
  null,
  { fetchColors: colorpicker.actions.fetchColors }
)(App);
