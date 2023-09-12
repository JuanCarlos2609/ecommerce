import { combineReducers } from 'redux';

import { productsReducer } from './Products';
import { NAME as products } from './Products/constants';

const rootReducer = combineReducers({
  [products]: productsReducer,
});

export default rootReducer;
