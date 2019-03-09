import React, { Component } from 'react';
import { connect } from 'react-redux';
import colorpicker from './modules/colorpicker';
import { getVisibleSelectors } from './modules/_common/selectors';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    const { fetchColors } = this.props;
    fetchColors();
  };

  render() {
    const { colors } = this.props;
    return (
      <div className="App">
        {colors.map(color => (
          <div>{color.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: getVisibleSelectors(state)
});

export default connect(
  mapStateToProps,
  { fetchColors: colorpicker.actions.fetchColors }
)(App);
