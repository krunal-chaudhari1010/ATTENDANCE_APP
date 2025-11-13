import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import LoginScreen from "../Authentication/Login";
import AttendanceReport from "../Tabs/AttendanceReport";
import LeaveReport from "../Tabs/LeaveReport";
import TeamMembers from "../Tabs/TeamMembers";
import UserProfile from "../Tabs/UserProfile";
import Dashboard from "./Dashboard";

const Stack = createNativeStackNavigator();
const Layout = () => {
  const [userToken, setUserToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        setUserToken(token);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    };
    checkLogin();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={userToken ? "Dashboard" : "Login"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="AttendanceReport" component={AttendanceReport} />
      <Stack.Screen name="LeaveReport" component={LeaveReport} />
      <Stack.Screen name="TeamMembers" component={TeamMembers} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
