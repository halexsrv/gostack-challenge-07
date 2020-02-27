import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test!</Text>
    </View>
  );
}
