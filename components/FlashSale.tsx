import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ProductType } from "../types/type";
import { useNavigation } from "@react-navigation/native";

type Props = {
  products: ProductType[];
};

const FlashSale = ({ products }: Props) => {
  const navigation = useNavigation();

  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 2);
  saleEndDate.setHours(23, 59, 59);

  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeUnits = (timeDifference: number) => {
      const seconds = Math.floor(timeDifference / 1000);
      setTimeUnits({
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      });
    };

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const expiryTime = saleEndDate.getTime();
      const timeDifference = expiryTime - currentDate;

      if (timeDifference <= 0) {
        calculateTimeUnits(0);
      } else {
        calculateTimeUnits(timeDifference);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timer}>
            <Ionicons name="time-outline" size={18} color={Colors.black} />
            <Text style={styles.timerText}>
              {`${formatTime(timeUnits.days)}:${formatTime(
                timeUnits.hours
              )}:${formatTime(timeUnits.minutes)}:${formatTime(
                timeUnits.seconds
              )}`}
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 10 }}
        keyExtractor={(item) => item.id.toString()}
        nestedScrollEnabled={true}
        renderItem={({ index, item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", { product: item })
            }
          >
            <View style={styles.productWrapper}>
              <Image
                source={{ uri: item.images[0] }}
                style={styles.productImg}
              />
              <TouchableOpacity style={styles.bookmarkBtn}>
                <Ionicons
                  name="heart-outline"
                  size={24}
                  color={Colors.primary}
                />
              </TouchableOpacity>
              <View style={styles.productInfo}>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.ratingWrapper}>
                  <Ionicons name="star" size={14} color={"#D4AF37"} />
                  <Text style={styles.rating}>4.7</Text>
                </View>
              </View>
              <Text style={styles.productTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 5,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
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
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  timerText: {
    color: Colors.black,
    fontWeight: "500",
  },
  productWrapper: {
    width: 160,
    marginRight: 10,
    marginVertical: 15,
  },
  productImg: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkBtn: {
    position: "absolute",
    left: 105,
    top: 8,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 5,
    borderRadius: 20,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    width: 150,
  },
  price: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    fontSize: 12,
    color: Colors.gray,
  },
  productTitle: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1,
    color: Colors.black,
  },
});
