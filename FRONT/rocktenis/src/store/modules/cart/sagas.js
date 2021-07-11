import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';
import { addToCartSucess, updateAmount } from './actions';

function* addToCart(action) {
  const { id } = action;

  const procductExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );
  if (procductExists) {
    const amount = procductExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFromatted: formatPrice(response.data.price),
    };
    yield put(addToCartSucess(data));
  }
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
