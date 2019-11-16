import React from "react";
import Route from "./Route";
import * as Font from "expo-font";
  
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Dosis-Bold": require("./assets/Font/Dosis-Bold.otf"),
      "Dosis-SemiBold": require("./assets/Font/Dosis-SemiBold.otf"),
      "Dosis-Light": require("./assets/Font/Dosis-Light.otf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return <Route />;
    }
    else{
      return <Route />;
    }
  } 
}
