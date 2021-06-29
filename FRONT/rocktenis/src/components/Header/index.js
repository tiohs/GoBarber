import React from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';

import { Container, Cart } from './style';
import logo from '../../assets/images/logo.svg';

export default function Header(){
  return (
    <Container>
      <Link to="/"> 
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
          <MdShoppingBasket size={36} color="#FFF"/>
        </div>
      </Cart>
    </Container>
  );
}