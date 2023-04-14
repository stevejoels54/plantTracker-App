import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import morning from "../../assets/pics/morning.png";
import afternoon from "../../assets/pics/afternoon.png";
import evening from "../../assets/pics/evening.png";
import { isEmpty } from "lodash";

const SummaryCard = ({ dayTime, condition, value, tab }) => {
  return (
    <View style={styles.container}>
      {tab === "day" ? (
        <View style={styles.card}>
          {dayTime === "morning" ? (
            <Image source={morning} style={styles.image} />
          ) : dayTime === "afternoon" ? (
            <Image source={afternoon} style={styles.image} />
          ) : (
            <Image source={evening} style={styles.image} />
          )}
          <Text style={styles.heading}>{dayTime.toUpperCase()}</Text>
          <View style={styles.valuesContainer}>
            <Text style={styles.condition}>Avg {condition}</Text>
            {isEmpty(value) ? (
              <Text style={styles.noData}>No Data</Text>
            ) : (
              <View style={styles.valueContainer}>
                {condition === "Temperature" ? (
                  <MaterialCommunityIcons
                    name="thermometer"
                    size={55}
                    color="#F2F2F2"
                  />
                ) : condition === "Light" ? (
                  <Ionicons name={"sunny"} size={55} color="#F2F2F2" />
                ) : (
                  <Ionicons name="water-sharp" size={55} color="#F2F2F2" />
                )}
                <Text style={styles.value}>{parseInt(value)}</Text>
                {condition === "Temperature" ? (
                  <Text style={styles.value}>°C</Text>
                ) : (
                  <Text style={styles.value}>%</Text>
                )}
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.valuesCard}>
          <Text style={styles.heading}>{condition}</Text>
          <View style={styles.valuesContainer}>
            {isEmpty(value) ? (
              <Text style={styles.noData}>No Data</Text>
            ) : (
              <View style={styles.valueContainer}>
                {condition === "Temperature" ? (
                  <MaterialCommunityIcons
                    name="thermometer"
                    size={55}
                    color="#F2F2F2"
                  />
                ) : condition === "Light" ? (
                  <Ionicons name={"sunny"} size={55} color="#F2F2F2" />
                ) : (
                  <Ionicons name="water-sharp" size={55} color="#F2F2F2" />
                )}
                <Text style={styles.value}>{parseInt(value)}</Text>
                {condition === "Temperature" ? (
                  <Text style={styles.value}>°C</Text>
                ) : (
                  <Text style={styles.value}>%</Text>
                )}
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#4C7352",
    width: "95%",
    height: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  // image in top left corner
  image: {
    position: "absolute",
    left: 10,
    top: 10,
    width: 50,
    height: 50,
  },
  // heading on the center top
  heading: {
    position: "absolute",
    top: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#E4E4B2",
  },
  // values container
  valuesContainer: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  // condition text in the center
  condition: {
    color: "#E4E4B2",
    fontSize: 20,
    fontWeight: "bold",
  },
  // value and icon container
  valueContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  // value text in the center
  value: {
    color: "#E4E4B2",
    fontSize: 45,
    fontWeight: "bold",
  },
  noData: {
    color: "#F2F2F2",
    fontSize: 15,
    fontWeight: "bold",
  },
  // Card for values with the icon in the top right corner
  valuesCard: {
    backgroundColor: "#4C7352",
    width: "95%",
    height: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SummaryCard;
