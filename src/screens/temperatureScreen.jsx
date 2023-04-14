import React from "react";
import { StyleSheet, View } from "react-native";
import IntroCard from "../components/introCard";
import SummaryTabs from "../components/Tabs/summaryTabs";

const TemperatureScreen = () => {
  return (
    <View style={styles.container}>
      <IntroCard condition={"Temperature"} />
      <SummaryTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TemperatureScreen;
