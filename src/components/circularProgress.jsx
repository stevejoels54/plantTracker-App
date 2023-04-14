import * as React from "react";
import CircularProgress from "react-native-circular-progress-indicator";

const ProgressIndicator = ({ condition, value }) => {
  return (
    <CircularProgress
      value={value}
      activeStrokeWidth={25}
      progressValueColor={"#E4E4B2"}
      activeStrokeColor="#E4E4B2"
      inActiveStrokeColor="#BDD982"
      inActiveStrokeOpacity={0.5}
      inActiveStrokeWidth={15}
      valueSuffix={condition === "Temperature" ? "°C" : "%"}
    />
  );
};

export default ProgressIndicator;
