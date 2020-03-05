// Library Imports
import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./src/constants/themes.js";
import TabNavgation from "./src/navigation/tabNavigation.js";

class App extends Component {
  state = {
    theme: light
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <TabNavgation />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

export default App;
