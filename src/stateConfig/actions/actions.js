const appActions = {
  SET_CURRENT_CONDITIONS: "SET_CURRENT_CONDITIONS",

  GET_CURRENT_READING_REQUEST: "GET_CURRENT_READING_REQUEST",
  GET_CURRENT_READING_SUCCESS: "GET_CURRENT_READING_SUCCESS",
  GET_CURRENT_READING_ERROR: "GET_CURRENT_READING_ERROR",

  GET_SUMMARY_REQUEST: "GET_SUMMARY_REQUEST",
  GET_SUMMARY_SUCCESS: "GET_SUMMARY_SUCCESS",
  GET_SUMMARY_ERROR: "GET_SUMMARY_ERROR",

  GET_NOTIFICATIONS_REQUEST: "GET_NOTIFICATIONS_REQUEST",
  GET_NOTIFICATIONS_SUCCESS: "GET_NOTIFICATIONS_SUCCESS",
  GET_NOTIFICATIONS_ERROR: "GET_NOTIFICATIONS_ERROR",

  setCurrentConditions: (currentConditions) => {
    return {
      type: appActions.SET_CURRENT_CONDITIONS,
      currentConditions,
    };
  },

  getCurrentReading: (device_id) => {
    return {
      type: appActions.GET_CURRENT_READING_REQUEST,
      device_id,
    };
  },

  getNotifications: (device_id) => {
    return {
      type: appActions.GET_NOTIFICATIONS_REQUEST,
      device_id,
    };
  },

  getSummary: (device_id) => {
    return {
      type: appActions.GET_SUMMARY_REQUEST,
      device_id,
    };
  },
};

export default appActions;
