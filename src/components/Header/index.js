import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderContainer,
  Container,
  HeaderItem,
  Logo,
  ListCount,
  ListCountText,
} from './styles';

import logo from '../../assets/logo.png';

function Header({ navigation, cartSize }) {
  return (
    <HeaderContainer>
      <Container>
        <HeaderItem onPress={() => navigation.navigate('Home')}>
          <Logo source={logo} />
        </HeaderItem>
        <ListCount>
          <HeaderItem onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-basket" size={24} color="#fff" />
          </HeaderItem>
          <ListCountText>{cartSize}</ListCountText>
        </ListCount>
      </Container>
    </HeaderContainer>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
