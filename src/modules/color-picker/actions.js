import * as type from './actionTypes';

const normalizeColors = color => ({ ...color, hex: `#${color.hex}` });

const fetchColors = () => ({
  type: type.FETCH_COLORS,
  payload: fetch(process.env.REACT_APP_DEFAULT_API_URL)
    .then(response => response.json())
    .then(data => data.map(normalizeColors))
});

export { fetchColors as default, fetchColors };
