import produce from 'immer';

import ProductOperaction from '../../../services/produce';

export default function cart(state = [], action) {
  // De modo que os state não sejam repitidos as suas chamadas
  // Porque o redux quando e chamado ele actualiza todos os state
  const produto = new ProductOperaction(state, action);
  switch (action.type) {
    case '@Cart/ADD_SUCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    case '@Cart/Remove':
      produto.remove();
      return produto.getObject();
    case '@Cart/UPDATE_AMOUNT':
      produto.updateAmount();
      return produto.getObject();
    default:
      return state;
  }
}
