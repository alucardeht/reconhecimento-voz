import React from "react";
import AppNavigator from "navigation/AppNavigator";
import NavigationServices from "services/NavigationServices";
import { ThemeContextProvider } from "services/ThemeProvider";
import { StatusBar } from "react-native";

console.disableYellowBox = true;

const App = () => {
  return (
    <ThemeContextProvider>
      <StatusBar hidden={true} />
      <AppNavigator
        ref={(navigatorRef) => {
          NavigationServices.setTopLevelNavigator(navigatorRef);
        }}
        transitionerStyle={{ backgroundColor: "transparent" }}
      />
    </ThemeContextProvider>
  );
};

export default App;
