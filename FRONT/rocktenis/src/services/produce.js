export default class AddPoductCart {
  constructor(state = [], action){
    this.state = [...state];
    this.action = {...action};
  }
  existProducts (){    
    return this.state.findIndex(product => product.id === this.action.product.id);
  }
  add(){
    console.log(this.existProducts());
    if(this.existProducts() >= 0) {
      return this.state[this.existProducts()].amount += 1;
    } else {
      this.state.push({
        ...this.action.product,
        amount: 1,
      })
    }
  }
  getObject (){
    return this.state;
  }
}

