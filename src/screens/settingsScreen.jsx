import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Linking,
} from "react-native";
import ExportData from "../components/exportData";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the FontAwesome icon library
import logo from "../../assets/pics/logo.png";
import config from "../config";

const SettingsScreen = () => {
  const currentYear = new Date().getFullYear(); // Get current year
  const [isModalVisible, setIsModalVisible] = useState(false);
  const device_id = config.DEVICE_ID;

  // Function to handle "View More" button press
  const handleViewMore = () => {
    const url = `${config.SERVER_URL}/device_data/${device_id}`;
    // You can use Linking to open the URL in the default browser of the device
    Linking.openURL(url);
  };

  // Function to handle "About" button press
  const handleAbout = () => {
    // Show the modal with developer information
    setIsModalVisible(true);
  };

  // Function to handle opening external links
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  // Function to handle "About" modal close
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.exportArea}>
        <ExportData />
      </View>
      <TouchableOpacity style={styles.viewMoreButton} onPress={handleViewMore}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} onPress={handleAbout}>
        <Text style={styles.aboutText}>About</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>About Developer</Text>
            <Text style={styles.modalText}>
              Developer's Info:
              {"\n"}- Name: Joel Steven Ssekyewa
              {"\n"}- Email: joelofelectronics@gmail.com
              {"\n"}
              App Version: 1.0.0
            </Text>
            <View style={styles.linksContainer}>
              <TouchableOpacity
                onPress={() =>
                  handleOpenLink(
                    "https://twitter.com/stevejobs_ug?t=mE3xeijJBDrgVMeScMOrXA&s=09"
                  )
                }
              >
                <Icon
                  name="twitter"
                  size={24}
                  color="blue"
                  style={styles.linkIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleOpenLink("https://github.com/stevejoels54")
                }
              >
                <Icon
                  name="github"
                  size={24}
                  color="black"
                  style={styles.linkIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleOpenLink(
                    "https://www.linkedin.com/in/joel-steven-ssekyewa-1baba3191"
                  )
                }
              >
                <Icon
                  name="linkedin"
                  size={24}
                  color="#0077B5"
                  style={styles.linkIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleOpenLink("mailto:joelofelectronics@gmail.com")
                }
              >
                <Icon
                  name="envelope"
                  size={24}
                  color="red"
                  style={styles.linkIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.copyrightText}>
              {"\u00A9"} joelofelectronics All Rights Reserved {currentYear}
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignContent: "center",
  },
  exportArea: {
    marginBottom: 16,
  },
  exportText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  viewMoreButton: {
    backgroundColor: "#4C7352",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  viewMoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F2F2",
    textAlign: "center",
  },
  aboutButton: {
    backgroundColor: "gray",
    padding: 16,
    borderRadius: 8,
  },
  aboutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F2F2",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "80%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalText: {
    marginBottom: 16,
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  linkIcon: {
    marginHorizontal: 8,
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    padding: 8,
  },
  modalCloseButtonText: {
    color: "blue",
  },
  copyrightText: {
    marginTop: 16,
    textAlign: "center",
    fontStyle: "italic",
    color: "rgba(0, 0, 0, 0.6)", // Update color to pale black
  },
  // center image
  image: {
    width: 200,
    height: 200,
    padding: 10,
    margin: 10,
  },
  // center image
  imageContainer: {
    alignItems: "center",
  },
});

export default SettingsScreen;
