import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomPressable from "../components/CustomPressable";

type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SignupScreen"
>;

type SignupScreenProps = {
  navigation: SignupScreenNavigationProp;
};

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <CustomTextInput
        title="Name"
        isSecureText={false}
        handleOnchangeText={setName}
        handleValue={name}
        handlePlaceholder="Enter your name"
      />

      <CustomTextInput
        title="Lastname"
        isSecureText={false}
        handleOnchangeText={setLastname}
        handleValue={lastname}
        handlePlaceholder="Enter your lastname"
      />

      <CustomTextInput
        title="E-mail"
        isSecureText={false}
        handleOnchangeText={setMail}
        handleValue={mail}
        handlePlaceholder="Enter your e-mail"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnchangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <CustomPressable
        buttonTitle="Sign up"
        handleOnpress={() => setIsLoading(true)}
      />

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
  loginArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  login: { color: "#0A5EB0", marginLeft: 5 },
});
