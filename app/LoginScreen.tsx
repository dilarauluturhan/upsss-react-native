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
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setIsLoading } from "../redux/userSlice";

type RootStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LoginScreen"
>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  // userSlice içindeki verilerin okunması
  const { email, password, isLoading } = useSelector(
    (state: any) => state.user
  );

  // userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

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
        buttonTitle="Login"
        handleOnpress={() => dispatch(setIsLoading(true))}
      />

      <View style={styles.signupArea}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.signUp}>Sign up</Text>
        </Pressable>
      </View>

      {isLoading ? <Loading /> : null}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  signupArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  signUp: { color: "#0A5EB0", marginLeft: 5 },
});
