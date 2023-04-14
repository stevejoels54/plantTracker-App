import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Thermometer from "../../assets/gifs/thermometer.gif";
import Sun from "../../assets/gifs/sunCloud.gif";
import Water from "../../assets/gifs/wateringPlant.gif";

const IntroCard = ({ condition }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.centerImage}
        source={
          condition === "Temperature"
            ? Thermometer
            : condition === "Light"
            ? Sun
            : Water
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4C7352",
    width: "100%",
    height: 300,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    elevation: 0,
    padding: 20,
    overflow: "hidden",
    zIndex: 1,
  },
  centerImage: {
    width: 250,
    height: 250,
    bottom: 0,
    alignSelf: "center",
    marginTop: 50,
  },
});

export default IntroCard;
