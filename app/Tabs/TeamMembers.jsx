import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Search from "../Constants/Search";

const TeamMembers = ({ navigation }) => {
  // const employees = [
  //   {
  //     id: "krunal2001",
  //     name: "Krunal Chaudhari",
  //     designation: "Mobile Application Developer",
  //   },
  //   {
  //     id: "kishan2222",
  //     name: "Kishan Parmar",
  //     designation: "Sr. Executive IT Support",
  //   },
  // ];

  const [input, setInput] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const employees = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const user = await AsyncStorage.getItem("UserId");
        console.log(token);

        if (token) {
          const response = await axios.get(
            `https://japps.jcntechnology.in/express/auth/user/${user}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setEmployeeDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };
    employees();
  }, []);
  // console.log(employeeDetails);

  // console.log(employees);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 40,
            flex: 1,
          }}
        >
          <EvilIcons
            style={{ marginLeft: 10 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />
        </Pressable>
      </View>

      {employeeDetails.length > 0 ? (
        <Search data={employeeDetails} input={input} setInput={setInput} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          <Pressable>
            <AntDesign
              style={{ marginTop: 30 }}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default TeamMembers;

const styles = StyleSheet.create({});
