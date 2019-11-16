import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

export default class ScreenC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          image: require("../assets/photo19.jpg"),
          value: "Pooh Picture",
          title: "6-Inch Pooh Animal Figure -Exclusive",
          price: "$100.49"
        },
        {
          image: require("../assets/photo18.jpg"),
          value: "Jumbo Picture",
          title: "6-Inch Jumbo Animal Figure -Exclusive",
          price: "$20.99"
        },
        {
          image: require("../assets/photo11.jpg"),
          value: "Dog Picture",
          title: "6-Inch Dog Animal Figure -Exclusive",
          price: "$24.79"
        },
        {
          image: require("../assets/photo15.jpg"),
          value: "Pig Picture",
          title: "6-Inch Pig Animal Figure -Exclusive",
          price: "$20.99"
        },
        {
          image: require("../assets/photo16.jpg"),
          value: "Hello Kitty Picture",
          title: "6-Inch Hello Kitty Animal Figure -Exclusive",
          price: "$40.99"
        },
        {
          image: require("../assets/img9.jpg"),
          value: "Deer Picture",
          title: "6-Inch Deer Animal Figure -Exclusive",
          price: "$10.99"
        },
        {
          image: require("../assets/photo17.jpg"),
          value: "Unicon Picture",
          title: "6-Inch Unicon Animal Figure -Exclusive",
          price: "$20.99"
        },
        {
          image: require("../assets/photo7.jpg"),
          value: "Rabbit Picture",
          title: "Rabbit Family Animal Figure -Exclusive",
          price: "$70.69"
        },
      ]
    };
  }
  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 2, width: "100%", backgroundColor: "#9bffea" }} />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View style={styles.secContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}
                onPress={() =>
                  this.props.navigation.navigate("ScreenD", {
                    image: item.image,
                    value: item.value,
                    title: item.title,
                    price: item.price
                  })
                }
              >
               {item.value}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 10,
    justifyContent: "center"
  },
  secContainer: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    width: "100%",
    textAlignVertical: "center",
    paddingLeft: "13%",
    color: "#F50985",
    fontSize: 16,
    fontFamily: 'Dosis-Light',
  },
  image: {
    width: "30%",
    height: 100,
    margin: 7
  }
});
