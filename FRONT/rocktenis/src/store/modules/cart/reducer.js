import produce from 'immer';

export default function cart(state = [], action) {
  // De modo que os state não sejam repitidos as suas chamadas
  // Porque o redux quando e chamado ele actualiza todos os state
  switch (action.type) {
    case '@Cart/ADD_SUCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    case '@Cart/Remove':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@Cart/UPDATE_AMOUNT_SUCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
