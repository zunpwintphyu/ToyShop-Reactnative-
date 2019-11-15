import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class ScreenE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 19.7559736,
        longitude: 96.2057553,
        latitudeDelta: 0.004757,
        longitudeDelta: 0.006866
      }
    };
  }
  render() {
    return (
      <View>
        <MapView style={styles.mapStyle} region={this.state.mapRegion}>
          <Marker
            style={{ width: 60, height: 40 }}
            draggable
            coordinate={{
              latitude: 19.75462,
              longitude: 96.203392
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"LINN MOBILE MART"}
            description={"MA-30,58 Street, Pyinmana"}
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
