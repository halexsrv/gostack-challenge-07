import { NavigationActions } from 'react-navigation';

let _navigator;

function setNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(route) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: route,
    })
  );
}

export default {
  navigate,
  setNavigator,
};
