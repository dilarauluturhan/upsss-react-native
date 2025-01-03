import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ProductType } from "../types/type";
import ImageSlider from "../components/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constant/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [getProduct, setGetProduct] = useState<ProductType>({});

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const URL = `http://localhost:8000/saleProducts/${product}`;
    const response = await axios.get(URL);

    setGetProduct(response.data);
  };

  return (
    <View style={{ backgroundColor: Colors.white }}>
      <ScrollView style={{ marginBottom: 120 }}>
        {product && <ImageSlider imageList={product.images} />}
        {product && (
          <View style={styles.container}>
            <Animated.View
              entering={FadeInDown.delay(300).duration(500)}
              style={styles.ratingWrapper}
            >
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={18} color={"#D4AF37"} />
                <Text style={styles.rating}>4.7</Text>
                <Text style={styles.rating}>(136)</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color={Colors.black} />
              </TouchableOpacity>
            </Animated.View>

            <Animated.Text
              entering={FadeInDown.delay(700).duration(500)}
              style={styles.title}
            >
              {product.title}
            </Animated.Text>

            <Animated.View
              entering={FadeInDown.delay(900).duration(500)}
              style={styles.priceWrapper}
            >
              <Text style={styles.price}>${product.price}</Text>
              <View style={styles.priceDiscount}>
                <Text style={styles.priceDiscountText}>6% Off</Text>
              </View>
              <Text style={styles.oldPrice}>${product.price + 2}</Text>
            </Animated.View>

            <Animated.Text
              entering={FadeInDown.delay(1100).duration(500)}
              style={styles.description}
            >
              {product.description}
            </Animated.Text>

            <Animated.View
              entering={FadeInDown.delay(1300).duration(500)}
              style={styles.productVariationWrapper}
            >
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTypeTitle}>Color</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={{
                      borderWidth: 1.5,
                      borderRadius: 100,
                      borderColor: Colors.primary,
                      padding: 2,
                    }}
                  >
                    <View
                      style={[
                        styles.productVariationColorValue,
                        { backgroundColor: "#2E5077" },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#F39E60" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      {
                        backgroundColor: "#86A788",
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#AE445A" },
                    ]}
                  />
                </View>
              </View>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTypeTitle}>Size</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={[
                      styles.productVariationSizeValue,
                      { borderColor: Colors.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.productVariationSizeValueText,
                        {
                          color: Colors.primary,
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      M
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>L</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>XL</Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>
        )}
      </ScrollView>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Colors.white,
              borderColor: Colors.primary,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: Colors.primary }]}>
            Add to Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
  },
  priceDiscount: {
    backgroundColor: "#DEDEDE",
    padding: 5,
    borderRadius: 7,
  },
  priceDiscountText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.primary,
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: "400",
    textDecorationLine: "line-through",
    color: Colors.gray,
  },
  description: {
    marginTop: 13,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  productVariationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
  productVariationType: {
    width: "50%",
    gap: 5,
    marginBottom: 10,
  },
  productVariationTypeTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  productVariationValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#C7C8CC",
  },
  productVariationSizeValue: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C7C8CC",
    borderWidth: 1,
  },
  productVariationSizeValueText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  buttonWrapper: {
    position: "absolute",
    height: 110,
    padding: 30,
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.white,
  },
});
