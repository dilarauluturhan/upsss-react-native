import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "../app/ProductDetails";
import UserStack from "./UserStack";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserTabs"
        component={UserStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: true, title: "Product Details" }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
