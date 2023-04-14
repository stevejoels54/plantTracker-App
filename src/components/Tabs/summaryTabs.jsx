import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import DaySummary from "./daySummary";
import WeekSummary from "./weekSummary";
import MonthSummary from "./monthSummary";

const SummaryTabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "day", title: "Day" },
    { key: "week", title: "Week" },
    { key: "month", title: "Month" },
  ]);

  const renderScene = SceneMap({
    day: DaySummary,
    week: WeekSummary,
    month: MonthSummary,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      tabBarPosition="top"
      lazy
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#F2F2F2",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  indicator: {
    backgroundColor: "#4C7352",
    height: 2,
  },
  label: {
    color: "#4C7352",
    fontWeight: "bold",
    fontSize: 14,
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SummaryTabs;
