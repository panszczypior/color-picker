import { combineReducers } from 'redux';
import colorpicker from './modules/colorpicker';
import activeColor from './modules/active-color';
import searchQuery from './modules/search-query';

export default combineReducers({
  [colorpicker.consts.NAME]: colorpicker.reducer,
  [activeColor.consts.NAME]: activeColor.reducer,
  [searchQuery.consts.NAME]: searchQuery.reducer
});
