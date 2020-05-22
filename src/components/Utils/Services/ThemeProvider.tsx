import React, { useContext } from "react";
import Themes from "theme";
import { useColorScheme } from "react-native";

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = Themes[colorScheme === "dark" ? 1 : 0];

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
// ...
export function withTheme(Component) {
  return (props) => {
    const { theme } = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
}
