import HomepageScreen from "../app/HomepageScreen";
import ProfileScreen from "../app/ProfileScreen";
import ExploreScreen from "../app/ExploreScreen";
import NotificationScreen from "../app/NotificationScreen";
import CartScreen from "../app/CartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#E07B39",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomepageScreen"
        component={HomepageScreen}
        options={{
          headerShown: true,
          headerTitle: () => <CustomHeader />,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: "Explore",
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: "Notification",
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={24} color={color} />
          ),
          tabBarBadgeStyle: {
            backgroundColor: "#E07B39",
            color: "white",
            width: 12,
            height: 18,
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserStack;

// kullanıcı giriş yaptıktan sonra ulaşabileceği sayfalar için
