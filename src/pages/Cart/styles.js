import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View``;

export const ProductList = styled.View`
  margin: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
`;

export const ProductItem = styled.View``;

export const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductItemDetails = styled.View`
  flex: 1;
  /* width: 200px; */
  height: 80px;
  margin: 10px;
  justify-content: space-between;
`;

export const ProductItemTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductItemRemove = styled.TouchableOpacity`
  padding: 4px;
`;

export const EmptyList = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
`;

export const EmptyListText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;

export const ProductItemTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductItemCount = styled.View`
  flex-direction: row;
`;

export const ProductItemQuantity = styled.View`
  background: #fff;
  margin: 0 5px;
  width: 40px;
  padding: 4px;
  align-items: center;
  border-radius: 4px;
`;

export const ProductItemQuantityText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const ProductItemTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Total = styled.View`
  margin: 40px;
  justify-content: center;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
`;

export const TotalPriceText = styled.Text`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
`;

export const FinishOrder = styled.View`
  background: ${colors.primary};
  border-radius: 4px;
  align-items: center;
`;

export const FinishOrderText = styled.Text`
  margin: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
