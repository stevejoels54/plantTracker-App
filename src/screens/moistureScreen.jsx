import React from "react";
import { StyleSheet, View } from "react-native";
import IntroCard from "../components/introCard";
import SummaryTabs from "../components/Tabs/summaryTabs";

const MoistureScreen = () => {
  return (
    <View style={styles.container}>
      <IntroCard condition={"Moisture"} />
      <SummaryTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 0,
  },
});

export default MoistureScreen;
