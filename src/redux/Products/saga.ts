import { put, call } from 'redux-saga/effects';
import _ from 'lodash';
import * as api from '../../providers';
import { Data, ProductsData } from './types';

import * as productsActions from './actions';

export function* handleGetProducts() {
  try {
    const response: ProductsData = yield call(api.getProducts);
    const dataResponse: Data[] = _.get(response, 'data', []);

    yield put(productsActions.handleGetListProducts(dataResponse));
  } catch (error) {
    yield put(productsActions.handleGetListError(error));
  }
}
