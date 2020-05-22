import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "components/Main";
import Presentation from "components/Presentation";
import DrawerContent from "components/Drawer";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="presentation"
        component={Presentation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Navigator"
        screenOptions={{ gestureEnabled: false }}
        drawerContent={DrawerContent}
        drawerType="front"
      >
        <Drawer.Screen name="Navigator" component={Navigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
