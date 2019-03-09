import * as type from './actionTypes';

const setActiveColor = color => ({
  type: type.SET_ACTIVE_COLOR,
  color
});

export { setActiveColor as default, setActiveColor };
