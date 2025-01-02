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
    <>
      <ScrollView>
        {product && <ImageSlider imageList={product.images} />}
        {product && (
          <View style={styles.container}>
            <View style={styles.ratingWrapper}>
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={18} color={"#D4AF37"} />
                <Text style={styles.rating}>4.7</Text>
                <Text style={styles.rating}>(136)</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color={Colors.black} />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>{product.title}</Text>

            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${product.price}</Text>
              <View style={styles.priceDiscount}>
                <Text style={styles.priceDiscountText}>6% Off</Text>
              </View>
              <Text style={styles.oldPrice}>${product.price + 2}</Text>
            </View>

            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.productVariationWrapper}>
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
                      { backgroundColor: "#FFE893" },
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
                      S
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>M</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>L</Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>XL</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
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
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  productVariationWrapper: {
    flexDirection: "row",
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
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#DEDEDE",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  productVariationSizeValueText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
});
