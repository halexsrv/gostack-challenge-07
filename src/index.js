import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function src() {
  return (
    <View style={styles.container}>
      <Text>Test!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});