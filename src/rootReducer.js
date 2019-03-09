import { combineReducers } from 'redux';
import colorpicker from './modules/colorpicker';

export default combineReducers({
  [colorpicker.consts.NAME]: colorpicker.reducer
});
