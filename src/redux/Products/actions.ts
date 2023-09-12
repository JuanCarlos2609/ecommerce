import * as productsConstans from './constants';
import { Data } from './types';

export const handleGetListProducts = (payload: Data[]) => ({
  type: productsConstans.GET_LIST_PRODUCTS_SAGA_FINISHED,
  payload: payload,
});

export const handleGetListError = (payload: any) => ({
  type: productsConstans.GET_LIST_PRODUCTS_SAGA_ERROR,
  payload: payload,
});
