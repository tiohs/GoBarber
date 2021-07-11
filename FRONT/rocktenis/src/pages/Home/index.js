import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import tenis from '../../assets/images/ok.jpg';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as cartAtions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
    loading: false,
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }
  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };
  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={tenis} alt="" />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>
              <span> ADICIONAR AO CARRINHO </span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispathToProps = dispatch => bindActionCreators(cartAtions, dispatch);
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
export default connect(mapStateToProps, mapDispathToProps)(Home);
