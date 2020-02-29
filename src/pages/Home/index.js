import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/action';

import {
  Container,
  ProductList,
  ProductItem,
  ProductItemImage,
  ProductItemTitle,
  ProductItemPrice,
  ProductItemAdd,
  ProductItemAddIcon,
  ProductItemAddIconText,
  ProductItemAddText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
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
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          horizontal
          extraData={this.props}
          renderItem={({ item }) => (
            <ProductItem>
              <ProductItemImage source={{ uri: item.image }} />
              <ProductItemTitle>{item.title}</ProductItemTitle>
              <ProductItemPrice>{item.priceFormatted}</ProductItemPrice>
              <ProductItemAdd onPress={() => this.handleAddProduct(item.id)}>
                <ProductItemAddIcon>
                  <Icon name="add-shopping-cart" size={24} color="#fff" />
                  <ProductItemAddIconText>
                    {amount[item.id] || 0}
                  </ProductItemAddIconText>
                </ProductItemAddIcon>
                <ProductItemAddText>ADICIONAR</ProductItemAddText>
              </ProductItemAdd>
            </ProductItem>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
