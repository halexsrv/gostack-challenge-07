import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home Page!</Text>
    </View>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  // headerLeft: () => <Text style={{ color: '#fff' }}>Rocketshoes</Text>,
  headerTitle: 'Rocketshoes',
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Text style={{ color: '#fff', marginRight: 10 }}>GoToCart</Text>
    </TouchableOpacity>
  ),
});
