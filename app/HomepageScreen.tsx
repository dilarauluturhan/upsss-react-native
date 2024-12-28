import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryType, ProductType } from "../types/type";
import { Colors } from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import Categories from "../components/Categories";

type Props = {
  item: ProductType;
  index: number;
};

const width = Dimensions.get("window").width - 40;

const HomepageScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = async () => {
    const URL = `http://localhost:8000/products`;
    const response = await axios.get(URL);

    setProducts(response.data);
    setIsLoading(false);
  };
  const getCategories = async () => {
    const URL = `http://localhost:8000/categories`;
    const response = await axios.get(URL);

    setCategories(response.data);
    setIsLoading(false);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(300).duration(500)}
      style={styles.generalContainer}
    >
      <Categories categories={categories} />
      
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For You</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <View style={styles.container}>
            <Image source={{ uri: item.images[0] }} style={styles.productImg} />
            <TouchableOpacity style={styles.bookmarkBtn}>
              <Ionicons name="heart-outline" size={24} color={Colors.primary} />
            </TouchableOpacity>
            <View style={styles.productInfo}>
              <Text style={styles.price}>${item.price}</Text>
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={17} color={"#D4AF37"} />
                <Text style={styles.rating}>4.7</Text>
              </View>
            </View>
            <Text style={styles.productTitle}>{item.title}</Text>
          </View>
        )}
      />
    </Animated.View>
  );
};

export default HomepageScreen;

const styles = StyleSheet.create({
  generalContainer: {
    marginHorizontal: 10,
    backgroundColor: Colors.white,
  },
  container: {
    backgroundColor: Colors.white,
    width: width / 2,
  },
  productImg: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 5,
    borderRadius: 20,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 1.1,
    color: Colors.black,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    fontSize: 14,
    color: Colors.gray,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
});
