import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const UserProfile = () => {
  const [isDeviceRegistered, setIsDeviceRegistered] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const userid = await AsyncStorage.getItem("UserId");

        if (!token || !userid) {
          console.log("Token or UserId missing");
          return;
        }

        const res = await axios.get(
          `https://japps.jcntechnology.in/express/auth/user/${userid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("User data:", res.data);
        setIsDeviceRegistered(res.data.DeviceRegisteredOn);
      } catch (error) {
        console.error("Fetch error:", error.response || error.message);
      }
    };

    fetchUserData();
  }, []);
  return (
    <View style={{ marginTop: 50 }}>
      <Text>UserProfile</Text>
      {isDeviceRegistered  ? (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign
            name="check"
            size={15}
            color="green"
            style={{ marginTop: 2, marginRight: 5, fontWeight: "bold" }}
          />
          <Text style={{ color: "green", fontWeight: "bold" }}>
            Device Registered
          </Text>
        </View>
      ) : (
        <View>
          <Text>"Not register"</Text>
        </View>
      )}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
