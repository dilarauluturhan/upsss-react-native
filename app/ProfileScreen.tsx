import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constant/Colors";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

type Props = {};

const ProfileScreen = (props: Props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={styles.userName}>Malena Kozimor</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="heart-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="card-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Payment History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="gift-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Reward Point</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="help-circle-outline"
            size={24}
            color={Colors.primary}
          />
          <Text style={styles.buttonText}>Customer Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="pencil-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Ionicons name="log-out-outline" size={22} color={Colors.primary} />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 110,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    gap: 15,
  },
  button: {
    padding: 10,
    borderColor: Colors.lightGray,
    borderWidth: 0.5,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.black,
  },
});
