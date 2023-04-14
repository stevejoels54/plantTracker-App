import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const ExportData = () => {
  const device_id = 1;
  // Function to handle export button press
  const handleExport = () => {
    const url = `https://stevejoels.pythonanywhere.com/export/${device_id}`;
    // You can use Linking to open the URL in the default browser of the device
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exportButton} onPress={handleExport}>
        <Entypo
          name="export"
          size={30}
          color="white"
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.exportButtonText}>Export Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  exportButton: {
    backgroundColor: "#4C7352",
    padding: 16,
    borderRadius: 8,
  },
  exportButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F2F2",
    textAlign: "center",
  },
});

export default ExportData;
