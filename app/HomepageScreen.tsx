import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomepageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomepageScreen</Text>
    </View>
  );
};

export default HomepageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
