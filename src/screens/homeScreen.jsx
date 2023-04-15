import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import happyPlant from "../../assets/gifs/happyPlant.gif";
import ConditionsCard from "../components/conditionsCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import appActions from "../stateConfig/actions/actions";
import moment from "moment";
import { checkCondition } from "../helpers/commentHelper";
import config from "../config";

const HomeScreen = ({ navigation }) => {
  const deviceID = config.DEVICE_ID;
  const currentTime = moment().format("HH:mm:ss");

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const plantData = useSelector((state) => state.getCurrentReadingSuccess);
  const plantDataLoading = useSelector(
    (state) => state.getCurrentReadingLoading
  );

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(appActions.getCurrentReading(deviceID));
  };

  useEffect(() => {
    if (isEmpty(plantData)) {
      dispatch(appActions.getCurrentReading(deviceID));
    }
  }, []);

  const setSelectedCondition = (condition) => {
    dispatch(appActions.setCurrentConditions(condition));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>PlantTracker</Text>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="bell"
              size={25}
              color="#F2F2F2"
              onPress={() => navigation.navigate("Notifications")}
            />
            <Ionicons
              name="settings-sharp"
              size={25}
              color="#F2F2F2"
              onPress={() => navigation.navigate("Settings")}
            />
          </View>
        </View>
        <Image source={happyPlant} style={styles.image} />
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Good</Text>
          {currentTime >= "06:00:00" && currentTime <= "12:00:00" ? (
            <Text style={styles.bottomText}>Morning</Text>
          ) : currentTime >= "12:00:00" && currentTime <= "18:00:00" ? (
            <Text style={styles.bottomText}>Afternoon</Text>
          ) : (
            <Text style={styles.bottomText}>Evening</Text>
          )}
        </View>
      </View>
      {plantDataLoading && !refreshing ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#BDD982" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={plantDataLoading}
              onRefresh={onRefresh}
            />
          }
        >
          <Text style={styles.introText}>Current Conditions</Text>
          <Pressable
            onPress={() => (
              setSelectedCondition("Temperature"),
              navigation.navigate("Temperature")
            )}
          >
            <ConditionsCard
              value={plantData?.temperature}
              condition={"Temperature"}
              comment={checkCondition("temperature", plantData?.temperature)}
              time={plantData?.reading_time}
            />
          </Pressable>
          <Pressable
            onPress={() => (
              setSelectedCondition("Light"), navigation.navigate("Light")
            )}
          >
            <ConditionsCard
              value={plantData?.light}
              condition={"Light Intensity"}
              comment={checkCondition("light", plantData?.light)}
              time={plantData?.reading_time}
            />
          </Pressable>
          <Pressable
            onPress={() => (
              setSelectedCondition("Moisture"), navigation.navigate("Moisture")
            )}
          >
            <ConditionsCard
              value={plantData?.moisture}
              condition={"Moisture"}
              comment={checkCondition("moisture", plantData?.moisture)}
              time={plantData?.reading_time}
            />
          </Pressable>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  //   A card with a curve on the bottom right corner
  card: {
    backgroundColor: "#4C7352",
    width: "100%",
    height: 400,
    borderBottomRightRadius: 50,
    elevation: 0,
    padding: 20,
    overflow: "hidden",
    zIndex: 1,
  },
  //   position image on the left side of the card
  image: {
    width: 200,
    height: 250,
    bottom: 0,
    alignSelf: "flex-end",
  },
  //   Position text on the right side of the card
  text: {
    color: "#F2F2F2",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  bottomText: {
    color: "#E4E4B2",
    fontSize: 35,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
  },
  introText: {
    color: "#4C7352",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
    marginLeft: 5,
  },
});

export default HomeScreen;
