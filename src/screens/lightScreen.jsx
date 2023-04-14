import React from "react";
import { StyleSheet, View } from "react-native";
import IntroCard from "../components/introCard";
import SummaryTabs from "../components/Tabs/summaryTabs";

const LightScreen = () => {
  return (
    <View style={styles.container}>
      <IntroCard condition={"Light"} />
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

export default LightScreen;
