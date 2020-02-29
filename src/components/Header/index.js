import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderContainer, Container, HeaderItem, Logo } from './styles';

import logo from '../../assets/logo.png';

export default function Header({ navigation }) {
  return (
    <HeaderContainer>
      <Container>
        <HeaderItem onPress={() => navigation.navigate('Home')}>
          <Logo source={logo} />
        </HeaderItem>
        <HeaderItem onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
        </HeaderItem>
      </Container>
    </HeaderContainer>
  );
}
