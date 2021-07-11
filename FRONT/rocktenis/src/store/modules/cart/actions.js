export function addToCartRequest(id) {
  return {
    type: '@Cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSucess(product) {
  return {
    type: '@Cart/ADD_SUCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@Cart/Remove',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT_RESQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@Cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount,
  };
}
