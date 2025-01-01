import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: "100%", height: 200, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold" },
  price: { fontSize: 18, color: "green", marginVertical: 10 },
  description: { fontSize: 16 },
});

export default ProductDetailsScreen;
