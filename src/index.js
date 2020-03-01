import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

import colors from './styles/colors';
import store from './store';

import Navigation from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes ref={navigationRef => Navigation.setNavigator(navigationRef)} />
    </Provider>
  );
}
