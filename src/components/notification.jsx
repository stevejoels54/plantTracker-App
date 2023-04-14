import { View, StyleSheet, Dimensions, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

const { width } = Dimensions.get("window");

const Notification = ({ condition, message, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <View style={styles.body}>
          {condition.split(" ")[0] == "Hight" ||
          condition.split(" ")[0] == "Low" ||
          condition.split(" ")[0] == "Dry" ||
          condition.split(" ")[0] == "Saturated" ? (
            <Ionicons name="warning-outline" size={35} color="#f57c00" />
          ) : condition.split(" ")[0] == "Normal" ||
            condition.split(" ")[0] == "Wet" ? (
            <Ionicons
              name="checkmark-circle-outline"
              size={35}
              color="#BDD982"
            />
          ) : (
            <Ionicons name="close-circle-outline" size={35} color="#f57c00" />
          )}
          <View style={styles.content}>
            <View style={styles.title}>
              <Text
                style={{ fontSize: 16, color: "#E4E4B2", fontWeight: "bold" }}
              >
                {condition}
              </Text>
              {condition.split(" ")[1] == "temperature" ? (
                <MaterialCommunityIcons
                  name={"thermometer"}
                  size={25}
                  color="#BDD982"
                />
              ) : condition.split(" ")[1] == "light" ? (
                <Ionicons name={"sunny"} size={25} color="#BDD982" />
              ) : (
                <Ionicons name={"water-sharp"} size={25} color="#BDD982" />
              )}
            </View>
            <Text style={{ fontSize: 14, color: "#F2F2F2", marginTop: 5 }}>
              {message}
            </Text>
            <Text style={{ fontSize: 10, color: "#BDD982", marginTop: 5 }}>
              Time: {moment(time).calendar()}
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
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    width: width - 20,
    height: 100,
    backgroundColor: "#4C7352",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Notification;
