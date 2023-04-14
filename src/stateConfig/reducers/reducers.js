import initialState from "../initialState/initialState";
import appActions from "../actions/actions";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.SET_CURRENT_CONDITIONS:
      return {
        ...state,
        selectedCondition: action.currentConditions,
      };
    case appActions.GET_CURRENT_READING_REQUEST:
      return {
        ...state,
        getCurrentReadingLoading: true,
      };
    case appActions.GET_CURRENT_READING_SUCCESS:
      return {
        ...state,
        getCurrentReadingLoading: false,
        getCurrentReadingSuccess: action.payload,
      };
    case appActions.GET_CURRENT_READING_ERROR:
      return {
        ...state,
        getCurrentReadingLoading: false,
        getCurrentReadingError: action.payload,
      };
    case appActions.GET_SUMMARY_REQUEST:
      return {
        ...state,
        getSummaryLoading: true,
      };
    case appActions.GET_SUMMARY_SUCCESS:
      return {
        ...state,
        getSummaryLoading: false,
        getSummarySuccess: action.payload,
      };
    case appActions.GET_SUMMARY_ERROR:
      return {
        ...state,
        getSummaryLoading: false,
        getSummaryError: action.payload,
      };
    case appActions.GET_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        getNotificationsLoading: true,
      };
    case appActions.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        getNotificationsLoading: false,
        getNotificationsSuccess: action.payload,
      };
    case appActions.GET_NOTIFICATIONS_ERROR:
      return {
        ...state,
        getNotificationsLoading: false,
        getNotificationsError: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
