import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import React, { useRef, useState } from "react";
import Pagination from "./Pagination";

type Props = {
  imageList: string[];
};

const width = Dimensions.get("screen").width;

const ImageSlider = ({ imageList }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState(0);

  return (
    <View>
      <FlatList
        data={imageList}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: 300, height: 300, borderRadius: 15 }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <Pagination items={imageList} paginationIndex={paginationIndex} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
