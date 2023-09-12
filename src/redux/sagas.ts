import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { handleGetProducts } from './Products';


// Saga para manejar la acción de incremento
function* incrementSaga() {
  yield put({ type: 'INCREMENT' });
}

// Saga para manejar la acción de decremento
function* decrementSaga() {
  yield put({ type: 'DECREMENT' });
}

// Define tus sagas raíz
export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementSaga);
  yield takeEvery('DECREMENT_ASYNC', decrementSaga);
  yield takeEvery('GET_LIST_PRODUCTS_SAGA_STARTED', handleGetProducts);
}
