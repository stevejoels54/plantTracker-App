import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProgressIndicator from "./circularProgress";
import moment from "moment";

const ConditionsCard = ({ value, condition, comment, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {condition === "Temperature" ? (
          <MaterialCommunityIcons
            name={"thermometer"}
            size={80}
            color="#BDD982"
            style={styles.icon}
          />
        ) : condition === "Light Intensity" ? (
          <Ionicons
            name={"sunny"}
            size={80}
            color="#BDD982"
            style={styles.icon}
          />
        ) : (
          <Ionicons
            name={"water-sharp"}
            size={80}
            color="#BDD982"
            style={styles.icon}
          />
        )}
        <View style={styles.cardContent}>
          <View style={styles.progressIndicator}>
            <ProgressIndicator value={value} condition={condition} />
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                color: "#E4E4B2",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {condition}
            </Text>
            <Text style={{ color: "#E4E4B2", fontSize: 15 }}>{comment}</Text>
            <Text style={{ color: "#F2F2F2", fontSize: 8 }}>
              Updated {moment(time).calendar()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#4C7352",
    width: "85%",
    height: 150,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: -40, // half the width of the icon
    top: "50%", // vertically centered
    marginTop: -40, // half the height of the icon
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  progressIndicator: {
    marginLeft: 20,
  },
  textContainer: {
    flexDirection: "column",
    margin: 10,
  },
  //   info icon in the top right corner
  infoIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default ConditionsCard;
