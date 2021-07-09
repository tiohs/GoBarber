import { call } from 'redux-saga/effects';
import api from '../../../services/api';

function* addToCart(id) {
  const response = yield call(api.get, `/products/${id}`);
}
