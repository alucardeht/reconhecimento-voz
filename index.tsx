import React from "react";
import { AppRegistry, Platform } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App";

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementsByTagName("body")[0],
  });
}
