import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import * as Font from "expo-font";
export default class ScreenA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Pyidaungsu: require("../assets/Font/Pyidaungsu.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>ရုပ်စုံကမ္ဘာ မှ ကြိုဆိုပါတယ်</Text>
          <Text style={styles.text}>
            ကလေးတို့ လိုချင်တဲ့ အရုပ်မျိုးစုံကို ဒီမှာ ရနိုင်ပြီနော်....
          </Text>
          <Image
            source={require("../assets/photo19.jpg")}
            style={{ marginTop: "10%" }}
          />
          <TouchableOpacity style={styles.btn}
            onPress={() => this.props.navigation.navigate("ScreenB")}
          >
            <Text style={styles.btntext}>Go to</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>
            Code with heart by Ultimate Solutions
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#F9419A",
    fontSize: 20,
    fontFamily: "Pyidaungsu"
  },
  text: {
    paddingTop: 20,
    color: "#F9419A",
    fontSize: 12,
    fontFamily: "Pyidaungsu",
  },
  footer: {
    marginTop: "auto",
    color:'black',
    fontSize: 10,
    marginBottom:3,
  },
  btntext:{
    textAlign:'center',
    color:'white',
    paddingTop:7,
  },
  btn:{
    width:'30%',
    height:40,
    borderRadius:5,
    backgroundColor: "#F50985",
    
  }
});
