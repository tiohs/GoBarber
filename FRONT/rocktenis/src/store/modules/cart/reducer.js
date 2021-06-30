
export default function cart(state = [], action){
  // De modo que os state não sejam repitidos as suas chamadas 
  // Porque o redux quando e chamado ele actualiza todos os state
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}