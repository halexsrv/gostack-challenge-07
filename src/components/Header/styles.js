import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const HeaderContainer = styled.SafeAreaView`
  background: ${colors.dark};
  /* flex-direction: row; */
  flex: 0;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderItem = styled.TouchableOpacity`
  margin: 20px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const ListCount = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ListCountText = styled.Text`
  position: absolute;
  overflow: hidden;
  top: 10px;
  right: 10px;
  padding: 2px;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
  background: ${colors.primary};
  color: #fff;
  height: 20px;
  width: 20px;
`;
