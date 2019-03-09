import { createSelector } from 'reselect';

import { NAME as colorpickerDataName } from './color-picker/consts';
import { NAME as searchQueryName } from './search-query/consts';

const getAllColors = state => state[colorpickerDataName].colorList;
const getQuery = state => state[searchQueryName].query;

const getVisibleSelectors = createSelector(
  [getAllColors, getQuery],

  (colors, query) => {
    return colors.filter(
      ({ name, hex }) => name.includes(query) || hex.includes(query)
    );
  }
);

export { getVisibleSelectors as default, getVisibleSelectors };
