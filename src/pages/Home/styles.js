import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  margin: 10px;
`;

export const ProductList = styled.FlatList``;

export const ProductItem = styled.View`
  margin: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
`;

export const ProductItemImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductItemTitle = styled.Text`
  width: 200px;
  height: 60px;
  font-size: 16px;
`;

export const ProductItemPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const ProductItemAdd = styled.TouchableOpacity`
  background: ${colors.primary};
  margin-top: 10px;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
`;

export const ProductItemAddIcon = styled.View`
  background: ${darken(0.04, colors.primary)};
  padding: 10px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductItemAddIconText = styled.Text`
  margin-left: 10px;
  color: #fff;
`;

export const ProductItemAddText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
