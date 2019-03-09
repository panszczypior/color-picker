const fetchColors = () => ({
  type: 'FETCH_COLORS',
  payload: fetch(process.env.REACT_APP_DEFAULT_API_URL).then(response =>
    response.json()
  )
});

export { fetchColors as default, fetchColors };
