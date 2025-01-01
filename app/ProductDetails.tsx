import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { ProductType } from "../types/type";
import ImageSlider from "../components/ImageSlider";

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
    <View style={styles.container}>
      {product && <ImageSlider imageList={product.images} />}
      {product && <Text>{product.title}</Text>}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
