import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CategoryType } from "../types/type";
import { Colors } from "../constant/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const ExploreScreen = (props: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const URL = `http://localhost:8000/categories`;
    const response = await axios.get(URL);

    setCategories(response.data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInDown.delay(300 + index * 100).duration(500)}
            style={styles.itemWrapper}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginRight: 7,
              }}
            />
          </Animated.View>
        )}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 110,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.6,
    marginLeft: 7,
  },
});
