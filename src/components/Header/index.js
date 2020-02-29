import React from 'react';
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

export default function Header({ navigation }) {
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
          <ListCountText>3</ListCountText>
        </ListCount>
      </Container>
    </HeaderContainer>
  );
}
