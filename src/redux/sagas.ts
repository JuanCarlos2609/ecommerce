import { takeEvery } from 'redux-saga/effects';
import { handleGetProducts } from './Products';

export default function* rootSaga() {
  yield takeEvery('GET_LIST_PRODUCTS_SAGA_STARTED', handleGetProducts);
}
