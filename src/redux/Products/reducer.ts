import * as productsContstants from './constants';
import { StateValues } from './types';

const initialState: StateValues = {
  products: [],
  error: null,
  isLoading: false,
};

export function productsReducer(state = initialState, action: any) {
  switch (action.type) {
    case productsContstants.GET_LIST_PRODUCTS_SAGA_STARTED:
      return { ...state, isLoading: true };
    case productsContstants.GET_LIST_PRODUCTS_SAGA_FINISHED:
      return { ...state, isLoading: false, products: action.payload };
    case productsContstants.GET_LIST_PRODUCTS_SAGA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export function list() {
  return { type: 'GET_LIST_PRODUCTS_SAGA_STARTED' };
}
