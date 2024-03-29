import * as type from './actionTypes';

const initState = {
  colorList: [],
  pending: false,
  error: null
};

export default function reducer(
  state = initState,
  { type: actionType, payload }
) {
  switch (actionType) {
    case type.FETCH_COLORS_PENDING:
      return { ...state, pending: true };
    case type.FETCH_COLORS_FULFILLED:
      return { ...state, colorList: payload, pending: false };
    case type.FETCH_COLORS_REJECTED:
      return { ...state, error: payload, pending: false };
    default:
      return state;
  }
}
