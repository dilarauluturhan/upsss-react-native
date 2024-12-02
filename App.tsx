import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />

      <Text style={styles.textStyle}>E-mail:</Text>
      <TextInput
        placeholder="Enter your e-mail"
        style={styles.textInputStyle}
        onChangeText={setMail}
        value={mail}
      />

      <Text style={styles.textStyle}>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        style={styles.textInputStyle}
        onChangeText={setPassword}
        value={password}
      />

      <Pressable
        onPress={() => console.log("onpress")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#E07B39" : "#F29F58",
          },
          styles.loginButton,
        ]}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "60%",
    height: "15%",
  },
  headerText: {
    fontSize: 32,
    color: "#F29F58",
  },
  textStyle: {},
  textInputStyle: {
    borderWidth: 1,
    width: "70%",
    height: 40,
    borderRadius: 10,
    marginVertical: 7,
    textAlign: "left",
  },
  loginButton: {
    width: "70%",
    height: 35,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
