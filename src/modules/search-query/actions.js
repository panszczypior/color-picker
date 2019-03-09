import * as type from './actionTypes';

const updateSearchQuery = query => ({
  type: type.UPDATE_SEARCH_QUERY,
  query
});

export { updateSearchQuery as default, updateSearchQuery };
