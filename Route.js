import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ScreenA from "./page/ScreenA";
import ScreenB from "./page/ScreenB";
import ScreenC from "./page/ScreenC";
import ScreenD from "./page/ScreenD";
import ScreenE from "./page/ScreenE";

const StackNavigatorConfig = {
  initialRouteName: "ScreenA"
};
const RouteConfigs = {
  ScreenA: {
    screen: ScreenA,
    navigationOptions: () => ({
      headerStyle: { elevation:0 },
    })
  },
  ScreenB: {
    screen: ScreenB,
    navigationOptions: () => ({
      title: "Category List",
      headerStyle: { backgroundColor: "#F50985" },
      headerTitleStyle: { color: "white", textAlign: "center", width: "75%", fontFamily:"Dosis-Bold",fontWeight: "200"},
      headerTintColor: "white"
    })
  },
  ScreenC: {
    screen: ScreenC,
    navigationOptions: () => ({
      title: "Animal Figure",
      headerStyle: { backgroundColor: "#F50985",},
      headerTitleStyle: { color: "white", textAlign: "center", width: "75%",fontFamily:"Dosis-Bold",fontWeight: "200" },
      headerTintColor: "white"
    })
  },
  ScreenD: {
    screen: ScreenD,
    navigationOptions: () => ({
      title: "Cartoon Animal",
      headerStyle: { backgroundColor: "#F50985",},
      headerTitleStyle: { color: "white", textAlign: "center", width: "75%",fontFamily:"Dosis-Bold",fontWeight: "200"},
      headerTintColor: "white"
    })
  },
  ScreenE: {
    screen: ScreenE,
    navigationOptions: () => ({
      title: "You can buy here...",
      headerStyle: { backgroundColor: "#F50985",},
      headerTitleStyle: { color: "white", textAlign: "center", width: "75%",fontFamily:"Dosis-Bold",fontWeight: "200" },
      headerTintColor: "white"
    })
  }
};
export default createAppContainer(
  createStackNavigator(RouteConfigs, StackNavigatorConfig)
);
