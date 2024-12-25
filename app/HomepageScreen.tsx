import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import CustomPressable from "../components/CustomPressable";

const HomepageScreen = () => {
  const [data, setData] = useState([]);

  console.log("data:", data);

  // send data to do firebase
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

  // get data from firebase
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "upsssTrying"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setData([...data, doc.data()]);
    });
  };

  // delete data from firebase
  const deleteData = async () => {
    await deleteDoc(doc(db, "upsssTrying", "rP0MaaSaDI1m0bNVKPoy"));
  };

  // update data from firebase
  const updateData = async () => {
    try {
      const upsssRef = doc(db, "upsssTrying", "LQ2Foh2UZcUcClHwWrd1");

      await updateDoc(upsssRef, {
        born: 1997,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomepageScreen</Text>

      <CustomPressable buttonTitle={"Save"} handleOnpress={sendData} />
      <CustomPressable buttonTitle={"Get Data"} handleOnpress={getData} />
      <CustomPressable buttonTitle={"Delete"} handleOnpress={deleteData} />
      <CustomPressable buttonTitle={"Update Data"} handleOnpress={updateData} />
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
