import * as type from './actionTypes';

const fetchColors = () => ({
  type: type.FETCH_COLORS,
  payload: fetch(process.env.REACT_APP_DEFAULT_API_URL).then(response =>
    response.json()
  )
});

export { fetchColors as default, fetchColors };
