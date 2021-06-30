import ProductOperaction from '../../../services/produce';

export default function cart(state = [], action){
  // De modo que os state não sejam repitidos as suas chamadas 
  // Porque o redux quando e chamado ele actualiza todos os state

  switch (action.type) {
    case 'ADD_TO_CART':
      const produto = new ProductOperaction(state, action);
      produto.add();
      return produto.getObject();
    default:
      return state;
  }
}