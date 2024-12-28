import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const CustomHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/minilogo.png")}
        style={styles.minilogo}
      />
      <TouchableOpacity style={styles.searchBar}>
        <Text style={styles.searchText}>Search</Text>
        <Ionicons name="search-outline" size={20} color={Colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    gap: 15,
  },
  minilogo: {
    width: 30,
    height: 30,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  searchText:{
    color: Colors.gray
  }
});
