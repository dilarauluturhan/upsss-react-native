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
import Loading from "../components/Loading";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Text style={styles.textStyle}>Name:</Text>
      <TextInput
        inputMode="text"
        placeholder="Enter your name"
        style={styles.textInputStyle}
        onChangeText={setMail}
        value={mail}
      />

      <Text style={styles.textStyle}>Lastname:</Text>
      <TextInput
        inputMode="text"
        placeholder="Enter your lastname"
        style={styles.textInputStyle}
        onChangeText={setMail}
        value={mail}
      />

      <Text style={styles.textStyle}>E-mail:</Text>
      <TextInput
        inputMode="email"
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
        secureTextEntry={true}
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#E07B39" : "#F29F58",
          },
          styles.loginButton,
        ]}
      >
        <Text style={styles.loginButtonText}>Sign up</Text>
      </Pressable>

      <View style={styles.loginArea}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.login}>Login</Text>
        </Pressable>
      </View>

      {isLoading ? <Loading /> : null}

      <StatusBar style="auto" />
    </View>
  );
};

export default SignupScreen;

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
  textStyle: {
    alignSelf: "flex-start",
    marginLeft: "15%",
    marginTop: 10,
  },
  textInputStyle: {
    borderWidth: 1,
    width: "70%",
    height: 40,
    borderRadius: 10,
    marginVertical: 7,
    textAlign: "left",
    paddingLeft: 10,
  },
  loginButton: {
    width: "70%",
    height: 35,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  loginArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  login: { color: "#1F509A", marginLeft: 5 },
});
