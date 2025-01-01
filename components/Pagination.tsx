import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constant/Colors";

type Props = {
  items: string[];
  paginationIndex: number;
};

const Pagination = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.paginationDots,
            {
              backgroundColor:
                props.paginationIndex === index ? Colors.primary : "#C7C8CC",
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDots: {
    width: 30,
    height: 4,
    margin: 3,
    borderRadius: 5,
    backgroundColor: "#C7C8CC",
  },
});
