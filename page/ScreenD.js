import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class ScreenD extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={navigation.getParam("image")} />
        </View>
        <View style={styles.secContainer}>
          <Text>{navigation.getParam("title")}</Text>
          <Text style={styles.text}>{navigation.getParam("price")}</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("ScreenE")}
          activeOpacity={0.8}
        >
          <View style={styles.thirdContainer}>
            <Text style={styles.text1}>Where can I buy?</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginRight: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    height: "50%"
  },
  image: {
    width: "99%",
    height: "99%"
    // marginTop:'5%',
  },
  price: {
    color: "red",
    paddingTop: 10
  },
  secContainer: {
    paddingLeft: "10%",
    paddingBottom: "10%"
  },
  thirdContainer: {
    backgroundColor: "blue",
    width: "60%",
    height: 40,
    paddingTop: 8,
    marginLeft: "20%"
  },
  text: {
    color: "red"
  },
  text1: {
    textAlign: "center",
    color: "white"
  }
});
