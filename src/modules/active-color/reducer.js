import * as type from './actionTypes';

const initState = {
  name: 'white',
  hex: '#fff'
};

export default function reducer(
  state = initState,
  { type: actionType, color }
) {
  switch (actionType) {
    case type.SET_ACTIVE_COLOR:
      return { ...state, ...color };
    default:
      return state;
  }
}
