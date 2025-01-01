import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";
import RootStack from "./RootStack";

const RootNavigation = () => {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
