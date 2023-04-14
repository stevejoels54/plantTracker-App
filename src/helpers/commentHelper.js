// values comment to show user

// helpers/notificationHelper.js

export const checkCondition = (condition, value) => {
  if (condition === "temperature") {
    if (value > 30) {
      return "It's a bit warm";
    } else if (value >= 20) {
      return "Moderate temperature";
    } else if (value >= 10) {
      return "It's a bit cool";
    } else {
      return "Normal temperature";
    }
  } else if (condition === "light") {
    if (value > 100) {
      return "It's too bright";
    } else if (value >= 50) {
      return "Moderate light";
    } else if (value >= 10) {
      return "It's a bit dim";
    } else {
      return "Normal light";
    }
  } else if (condition === "moisture") {
    if (value > 70) {
      return "It's too moist";
    } else if (value >= 30) {
      return "Wet moisture";
    } else if (value >= 10) {
      return "Moist moisture";
    } else {
      return "Dry moisture";
    }
  } else {
    // Handle other conditions if needed
    return "Unknown condition";
  }
};
