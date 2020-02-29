import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const HeaderContainer = styled.SafeAreaView`
  background: ${colors.dark};
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
