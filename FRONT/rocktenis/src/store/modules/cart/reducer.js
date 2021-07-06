import ProductOperaction from '../../../services/produce';

export default function cart(state = [], action) {
  // De modo que os state não sejam repitidos as suas chamadas
  // Porque o redux quando e chamado ele actualiza todos os state
  const produto = new ProductOperaction(state, action);
  switch (action.type) {
    case '@Cart/ADD':
      produto.add();
      return produto.getObject();
    case '@Cart/Remove':
      produto.remove();
      return produto.getObject();
    default:
      return state;
  }
}
