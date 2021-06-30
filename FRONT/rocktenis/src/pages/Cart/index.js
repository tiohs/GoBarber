import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import {Container, ProductTable, Total } from './styles';
import tenis from '../../assets/images/ok.jpg';

class Cart extends Component { 
  
  render(){
    const { cart } = this.props;
    return (<Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          { cart.map(product => (

          <tr>
          <td>
            <img src={tenis} alt="Tenis" />
          </td>
          <td>
            <strong>
            {product.title}
            </strong>
            <span>
              {product.priceFormatted}
            </span>
          </td>
          <td>
            <div>
              <button>
                <MdRemoveCircleOutline size={20} color="#7159c1"/>
              </button>
              <input type="numeber" readOnly value={product.amount}/>
              <button>
                <MdAddCircleOutline size={20} color="#7159c1"/>
              </button>
            </div>
          </td>
          <td>
            <strong>R$ 258,80</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1"/>
            </button>
          </td>
        </tr>
          ))
        }</tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido </button>
        <Total>
          <span>Total</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>);
  }
  
}
const mapStateToProps = state => ({
  cart : state.cart,
});
export default connect(mapStateToProps)(Cart);
