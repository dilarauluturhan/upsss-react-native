import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CustomPressable from "../components/CustomPressable";

const HomepageScreen = () => {
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "upsssTrying"), {
        title: "Zero to hero",
        content: "e-commerce",
        born: 2024,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomepageScreen</Text>
      <CustomPressable buttonTitle={"Save"} handleOnpress={sendData} />
    </View>
  );
};

export default HomepageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
