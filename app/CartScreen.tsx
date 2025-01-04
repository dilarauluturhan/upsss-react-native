import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartItemType } from "../types/type";
import { Colors } from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const CartScreen = (props: Props) => {
  const [cartItem, setCartItem] = useState<CartItemType>();

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = async () => {
    const URL = `http://localhost:8000/cart`;
    const response = await axios.get(URL);

    setCartItem(response.data);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={cartItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInDown.delay(300 + index * 100).duration(600)}
            >
              <CartItem item={item} />
            </Animated.View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.priceText}>$825.50</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <Ionicons name="chevron-forward-outline" size={19} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const CartItem = ({ item }: { item: CartItemType }) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: item.image }} style={styles.itemImg} />
      <View style={styles.itemInfoWrapper}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>${item.price}</Text>
        <View style={styles.itemControlWrapper}>
          <View style={styles.quantityWrapper}>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={21} color={"#C62E2E"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.quantityControl}>
              <Ionicons
                name="remove-outline"
                size={20}
                color={Colors.lightGray}
              />
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity style={styles.quantityControl}>
              <Ionicons name="add-outline" size={20} color={Colors.lightGray} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 110,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#C7C8CC",
    backgroundColor: "#DEDEDE",
    borderRadius: 7,
  },
  itemImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemInfoWrapper: {
    flex: 1,
    alignSelf: "flex-start",
    gap: 10,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.black,
  },
  itemControlWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  quantityControl: {
    padding: 1.5,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.lightGray,
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Colors.white,
  },
  priceInfoWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.lightGray,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 0.6,
  },
  checkoutBtn: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    flexDirection: "row",
    gap: 4,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  checkoutText: {
    fontSize: 15,
    fontWeight: "400",
  },
});
