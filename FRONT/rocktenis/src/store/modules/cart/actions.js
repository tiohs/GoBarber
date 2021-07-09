export function addToCart(id) {
  return {
    type: '@Cart/ADD',
    id,
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
    type: '@Cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
