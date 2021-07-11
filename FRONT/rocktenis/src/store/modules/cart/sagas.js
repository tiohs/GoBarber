import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSucess } from './actions';

function* addToCart(action) {
  const { id } = action;
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSucess(response.data));
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
