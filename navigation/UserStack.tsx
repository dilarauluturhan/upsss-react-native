import HomepageScreen from "../app/HomepageScreen";
import ProfileScreen from "../app/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomepageScreen" component={HomepageScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default UserStack;

// kullanıcı giriş yaptıktan sonra ulaşabileceği sayfalar için
