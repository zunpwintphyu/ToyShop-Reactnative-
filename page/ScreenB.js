import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class ScreenB extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.first}>
          <View style={styles.box}>
            <Image
              source={require("../assets/img8.jpg")}
              style={styles.image}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ScreenC")}
            >
              <Text style={styles.text}>Animal</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image
              source={require("../assets/photo2.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Dolls</Text>
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.box}>
            <Image
              source={require("../assets/img7.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Educational</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require("../assets/photo3.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Controlled Cars</Text>
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.box}>
            <Image
              source={require("../assets/img6.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Electronic</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require("../assets/photo20.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Creative</Text>
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.box}>
            <Image
              source={require("../assets/photo4.png")}
              style={styles.image}
            />
            <Text style={styles.text}>Sound</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={require("../assets/img5.jpg")}
              style={styles.image}
            />
            <Text style={styles.text}>Action Figure</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35, 
    marginTop: 15,
    // marginLeft: 10,
    // marginRight: 10,
    
  },

  first: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  text: {
    color: "black",
    marginTop: 10,
    textAlign: "center", 
  },
  box: {
    backgroundColor: "#9bffea",
    width: "45%",
    height: 120,
    borderRadius: 7,
  },
  image: {
    width: "60%",
    height: "60%",
    marginLeft: "20%",
    marginTop: "5%"
  }
});
