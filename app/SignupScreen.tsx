import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomPressable from "../components/CustomPressable";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setLastname,
  setEmail,
  setPassword,
  setIsLoading,
} from "../redux/userSlice";

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
  const { name, lastname, email, password, isLoading } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <CustomTextInput
        title="Name"
        isSecureText={false}
        handleOnchangeText={(text) => dispatch(setName(text))}
        handleValue={name}
        handlePlaceholder="Enter your name"
      />

      <CustomTextInput
        title="Lastname"
        isSecureText={false}
        handleOnchangeText={(text) => dispatch(setLastname(text))}
        handleValue={lastname}
        handlePlaceholder="Enter your lastname"
      />

      <CustomTextInput
        title="E-mail"
        isSecureText={false}
        handleOnchangeText={(text) => dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceholder="Enter your e-mail"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnchangeText={(password) => dispatch(setPassword(password))}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <CustomPressable
        buttonTitle="Create account"
        handleOnpress={() => dispatch(setIsLoading(true))}
      />

      <View style={styles.loginArea}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.login}>Login</Text>
        </Pressable>
      </View>

      {isLoading ? <Loading /> : null}

      <StatusBar style="auto" />
    </SafeAreaView>
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
