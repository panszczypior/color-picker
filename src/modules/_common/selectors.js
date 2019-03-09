import { createSelector } from 'reselect';
import colorpicker from '../colorpicker';
import searchQuery from '../search-query';

const getVisibleSelectors = createSelector(
  [colorpicker.selectors.getAll, searchQuery.selectors.getQuery],
  (colors, query) => {
    return colors.filter(
      ({ name, hex }) => name.includes(query) || hex.includes(query)
    );
  }
);

export { getVisibleSelectors as default, getVisibleSelectors };
