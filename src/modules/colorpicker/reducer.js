export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_COLORS_PENDING':
      return state;
    case 'FETCH_COLORS_FULFILLED':
      return state;
    case 'FETCH_COLORS_REJECTED':
      return state;
    default:
      return state;
  }
}
