import React, { Component } from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import tenis from '../../assets/images/ok.jpg';
import api from '../../services/api';

export default class Home extends Component { 
  state = {
    products: [],
  }

  async componentDidMount(){
    const response = await api.get('products');

    this.setState({ products: response.data });
  }
  render (){
    const { products } = this.state;
    
    return  (<ProductList>
     { products.map(product => (
       <li key={product.id}>
        <img src={tenis} alt="" />
        <strong>{ product.title }</strong>
        <span>{ product.price }</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size = {16 } color="#FFF"/> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
     </li>
     ))}
    </ProductList>)
  
  }
 
}

