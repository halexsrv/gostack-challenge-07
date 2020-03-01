import React from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/action';

import colors from '../../styles/colors';

import {
  Container,
  ProductList,
  ProductItem,
  ProductContainer,
  ProductItemImage,
  ProductItemDetails,
  ProductItemTitle,
  ProductItemPrice,
  ProductItemRemove,
  EmptyList,
  EmptyListText,
  ProductItemTotal,
  ProductItemCount,
  ProductItemQuantity,
  ProductItemQuantityText,
  ProductItemTotalText,
  Total,
  TotalText,
  TotalPriceText,
  FinishOrder,
  FinishOrderText,
} from './styles';

function Cart({ cart, total, cartSize, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  if (cartSize === 0) {
    return (
      <Container>
        <EmptyList>
          <Icon name="remove-shopping-cart" size={64} color="#999" />
          <EmptyListText>Seu Carrinho está vazio.</EmptyListText>
        </EmptyList>
      </Container>
    );
  }

  return (
    <Container>
      <ProductList>
        {cart.map(item => (
          <ProductItem key={item.id}>
            <ProductContainer>
              <ProductItemImage source={{ uri: item.image }} />
              <ProductItemDetails>
                <ProductItemTitle>{item.title}</ProductItemTitle>
                <ProductItemPrice>{item.priceFormatted}</ProductItemPrice>
              </ProductItemDetails>
              <ProductItemRemove onPress={() => removeFromCart(item.id)}>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </ProductItemRemove>
            </ProductContainer>
            <ProductItemTotal>
              <ProductItemCount>
                <TouchableOpacity onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={24}
                    color={colors.primary}
                  />
                </TouchableOpacity>
                <ProductItemQuantity>
                  <ProductItemQuantityText>
                    {item.amount}
                  </ProductItemQuantityText>
                </ProductItemQuantity>
                <TouchableOpacity onPress={() => increment(item)}>
                  <Icon
                    name="add-circle-outline"
                    size={24}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </ProductItemCount>
              <ProductItemTotalText>{item.subTotal}</ProductItemTotalText>
            </ProductItemTotal>
          </ProductItem>
        ))}
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalPriceText>{total}</TotalPriceText>
        </Total>
        <FinishOrder>
          <FinishOrderText>FINALIZAR PEDIDO</FinishOrderText>
        </FinishOrder>
      </ProductList>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  cartSize: state.cart.length,
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
