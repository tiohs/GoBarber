import { call, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';
import { addToCartSucess } from './actions';

function* addToCart(action) {
  const { id } = action;
  const response = yield call(api.get, `/products/${id}`);
  const data = {
    ...response.data,
    amount: 1,
    priceFromatted: formatPrice(response.data.price),
  };
  yield put(addToCartSucess(data));
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
