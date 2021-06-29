import React from 'react';

import {Container, ProductTable, Total } from './styles';

export default function Cart() { 
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
        <tr>
          
        </tr>
      </tbody>
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

