import * as type from './actionTypes';

const initState = {
  query: ''
};

export default function reducer(
  state = initState,
  { type: actionType, query }
) {
  switch (actionType) {
    case type.UPDATE_SEARCH_QUERY:
      return { ...state, query };
    default:
      return state;
  }
}
