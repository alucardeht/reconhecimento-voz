import { NavigationActions } from "@react-navigation/native";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function reset(routeName, params) {
  var actions = {};
  var key = Math.random();

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      actions,
      key,
    })
  );
}

function getCurrentRoute() {
  let route = _navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
}

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
  reset,
};
