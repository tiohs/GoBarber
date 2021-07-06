export function addToCart(product) {
  return {
    type: '@Cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@Cart/Remove',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
