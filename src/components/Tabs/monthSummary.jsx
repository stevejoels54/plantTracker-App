import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Image,
} from "react-native";
import SummaryCard from "../summaryCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { isEmpty } from "lodash";
import appActions from "../../stateConfig/actions/actions";
import noData from "../../../assets/pics/noData.png";
import config from "../../config";

const MonthSummary = () => {
  const deviceID = config.DEVICE_ID;
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.getSummarySuccess);
  const summaryLoading = useSelector((state) => state.getSummaryLoading);
  const selectedCondition = useSelector((state) => state.selectedCondition);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(appActions.getSummary(deviceID));
  };

  useEffect(() => {
    if (isEmpty(summary)) {
      dispatch(appActions.getSummary(deviceID));
    }
  }, []);

  const monthSummary = summary.monthSummary; // Extract monthSummary from the data prop
  return (
    <View style={styles.container}>
      {summaryLoading && !refreshing ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#BDD982" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={summaryLoading} onRefresh={onRefresh} />
          }
        >
          {isEmpty(monthSummary) ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image source={noData} style={{ width: 100, height: 100 }} />
              <Text
                style={{ fontSize: 20, color: "#4C7352", fontWeight: "bold" }}
              >
                No data available
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.text}>Month Summary</Text>
              <SummaryCard
                condition={selectedCondition}
                value={monthSummary[selectedCondition?.toLowerCase()]}
              />
            </View>
          )}
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
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    margin: 10,
    color: "#4C7352",
  },
});

export default MonthSummary;
