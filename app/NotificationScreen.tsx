import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NotificationType } from "../types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constant/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const NotificationScreen = (props: Props) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const URL = `http://localhost:8000/notifications`;
    const response = await axios.get(URL);

    setNotifications(response.data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Animated.View
            style={styles.notificationWrapper}
            entering={FadeInDown.delay(300 + index * 100).duration(500)}
          >
            <View style={styles.notificationIcon}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={Colors.primary}
              />
            </View>
            <View style={styles.notificationInfo}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.timestamp}</Text>
              </View>
              <Text style={styles.notificationMessage}>{item.message}</Text>
            </View>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 110,
  },
  notificationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 13,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#C7C8CC",
    backgroundColor: "#DEDEDE",
    borderRadius: 7,
  },
  notificationIcon: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  notificationInfo: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
    lineHeight: 20,
  },
});
