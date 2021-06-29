import React, { Component } from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import tenis from '../../assets/images/ok.jpg';
import api from '../../services/api';

export default class Home extends Component { 
  render (){
    return  (<ProductList>
      <li>
        <img src={tenis} alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size = {16 } color="#FFF"/> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src={tenis} alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size = {16 } color="#FFF"/> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src={tenis} alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size = {16 } color="#FFF"/> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img src={tenis} alt="" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size = {16 } color="#FFF"/> 3
          </div>
          <span> ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      
    </ProductList>)
  
  }
 
}

