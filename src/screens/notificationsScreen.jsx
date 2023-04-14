import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Text,
} from "react-native";
import Notification from "../components/notification";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { isEmpty } from "lodash";
import appActions from "../stateConfig/actions/actions";

const NotificationsScreen = () => {
  const deviceID = 1;
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.getNotificationsSuccess);
  const notificationsLoading = useSelector(
    (state) => state.getNotificationsLoading
  );

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(appActions.getNotifications(deviceID));
  };

  useEffect(() => {
    if (isEmpty(notifications)) {
      dispatch(appActions.getNotifications(deviceID));
    }
  }, []);

  return (
    <View style={styles.container}>
      {notificationsLoading && !refreshing ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#BDD982" />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={notificationsLoading}
              onRefresh={onRefresh}
            />
          }
        >
          {isEmpty(notifications) ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#BDD982" }}>
                No notifications yet
              </Text>
            </View>
          ) : (
            notifications?.map((notification) => {
              return (
                <Notification
                  key={notification?.notification_id}
                  condition={notification?.notification_type}
                  message={notification?.notification_message}
                  time={notification?.notification_time}
                />
              );
            })
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    marginTop: 100,
  },
});

export default NotificationsScreen;
