import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { CategoryType } from "../types/type";
import { Colors } from "../constant/Colors";

type Props = {
  categories: CategoryType[];
};

const Categories = ({ categories }: Props) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.itemImg} />
            <Text>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  itemImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
  },
});
