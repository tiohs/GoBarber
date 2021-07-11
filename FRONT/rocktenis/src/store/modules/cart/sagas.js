import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { formatPrice } from '../../../util/format';
import api from '../../../services/api';
import { addToCartSucess, updateAmount } from './actions';

function* addToCart(action) {
  const { id } = action;

  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    console.log('Não tem produto ');
    return;
  }
  if (productExists) {
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
