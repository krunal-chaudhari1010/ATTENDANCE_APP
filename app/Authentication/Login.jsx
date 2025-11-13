// // Login.jsx
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import logo from "../../assets/images/jcn logo.jpg";

// const Login = ({ navigation }) => {
//   const [formdata, setFormdata] = useState({
//     UserId: "",
//     Password: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const onHandleChange = (name, value) => {
//     setFormdata((prevdata) => ({
//       ...prevdata,
//       [name]: value,
//     }));
//   };

//   const handleLogin = async () => {
//     setLoading(true);

//     const { UserId, Password } = formdata;

//     if (!UserId || !Password) {
//       Alert.alert("Please fill in both fields");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://japps.jcntechnology.in/express/auth/login",
//         formdata
//       );

//       // Save token
//       await AsyncStorage.setItem("token", response.data.token);
//       await AsyncStorage.setItem("UserId", UserId);
//       setLoading(true);

//       Alert.alert("Success", "Login successful!", [
//         {
//           text: "OK",
//           onPress: () => navigation.navigate("Dashboard"),
//         },
//       ]);
//     } catch (error) {
//       console.error("Login error:", error);
//       Alert.alert("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Image source={logo} alt="company_logo" style={styles.logo} resizeMode="cover"/>
//       </View>
//       <View>
//         <Text style={styles.login}>Login</Text>

//         <Text style={styles.username}>Username</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={formdata.UserId}
//           onChangeText={(text) => onHandleChange("UserId", text)}
//         />

//         <Text style={styles.password}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={formdata.Password}
//           onChangeText={(text) => onHandleChange("Password", text)}
//         />

//         <TouchableOpacity style={styles.loginbtn} onPress={handleLogin}>
//           <Text style={styles.loginbtnText}>Login</Text>
//         </TouchableOpacity>
//       </View>

//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator size="large" color="#846d52ff" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: "white",
//     flex: 1,
//   },
//   logo: {
//     width: "40px",
//     height: "40px ",
//   },
//   login: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   loginbtn: {
//     backgroundColor: "#007bff",
//     padding: 12,
//     alignItems: "center",
//     borderRadius: 5,
//   },
//   loginbtnText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   loadingOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(0,0,0,0.2)",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 10,
//   },
// });

// "use client";

// import { Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import * as Application from "expo-application";
// import Checkbox from "expo-checkbox";
// import * as Device from "expo-device";
// import { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import logo from "../../assets/images/jcn logo.jpg";

// const Login = ({ navigation }) => {
//   const [formdata, setFormdata] = useState({
//     UserId: "",
//     Password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setChecked] = useState(false);
//   const [deviceId, setDeviceId] = useState(null);

//   useEffect(() => {
//     if (isChecked) {
//       const fetchDeviceId = async () => {
//         try {
//           if (Platform.OS === "ios") {
//             const idfv = await Application.getIosIdForVendorAsync();
//             // console.log("iOS Device ID (IDFV):", idfv);
//             setDeviceId(idfv);
//           } else if (Platform.OS === "android") {
//             // Fallback: use expo-device’s unique ID (works in Expo Go)
//             const androidId =
//               Device.deviceId ?? Device.modelId ?? Device.osBuildId;
//             // console.log("Android Device ID:", androidId);
//             setDeviceId(androidId);
//           }
//         } catch (error) {
//           console.error("Error getting device ID:", error);
//         }
//       };

//       fetchDeviceId();
//     }
//   }, []);

//   const onHandleChange = (name, value) => {
//     setFormdata((prevdata) => ({
//       ...prevdata,
//       [name]: value,
//     }));
//   };

//   const handleLogin = async () => {
//     setLoading(true);

//     const { UserId, Password } = formdata;

//     if (!UserId || !Password) {
//       Alert.alert("Please fill in both fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://japps.jcntechnology.in/express/auth/login",
//         formdata
//       );

//       // Save token
//       await AsyncStorage.setItem("token", response.data.token);
//       await AsyncStorage.setItem("UserId", UserId);

//       Alert.alert("Alert", "Is Your Device Registered ?", [
//         {
//           text: "Yes",
//           onPress: () => navigation.navigate("Dashboard"),
//         },
//         {
//           text: "No",
//           onPress: () => navigation.navigate("Dashboard"),
//         },
//       ]);
//     } catch (error) {
//       console.error("Login error:", error);
//       Alert.alert("Error", "Something went wrong. Try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header Section */}
//         <View style={styles.header}>
//           <Image
//             source={logo}
//             alt="company_logo"
//             style={styles.logo}
//             resizeMode="cover"
//           />
//         </View>

//         {/* Form Section */}
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Welcome Back {deviceId}</Text>
//           <Text style={styles.subtitle}>Sign in to your account</Text>

//           {/* Username Input */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your username"
//               placeholderTextColor="#A0A0A0"
//               value={formdata.UserId}
//               onChangeText={(text) => onHandleChange("UserId", text)}
//               editable={!loading}
//             />
//           </View>

//           {/* Password Input */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Password</Text>
//             <View style={{ position: "relative" }}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter your password"
//                 placeholderTextColor="#A0A0A0"
//                 secureTextEntry={!showPassword ? true : false}
//                 value={formdata.Password}
//                 onChangeText={(text) => onHandleChange("Password", text)}
//                 editable={!loading}
//               />
//               {!showPassword ? (
//                 <Entypo
//                   name="eye"
//                   size={24}
//                   color="gray"
//                   onPress={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: "absolute",
//                     marginVertical: 15,
//                     right: 30,
//                   }}
//                 />
//               ) : (
//                 <Entypo
//                   name="eye-with-line"
//                   size={24}
//                   color="gray"
//                   onPress={() => setShowPassword(!showPassword)}
//                   style={{
//                     position: "absolute",
//                     marginVertical: 15,
//                     right: 30,
//                   }}
//                 />
//               )}
//             </View>
//           </View>

//           <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
//             <Checkbox
//               value={isChecked}
//               onValueChange={setChecked}
//               color={isChecked ? "#e88f41ff" : undefined}
//             />
//             <Text style={styles.label}>Device Registration</Text>
//           </View>

//           {/* Login Button */}
//           <TouchableOpacity
//             style={[styles.loginbtn, loading && styles.loginbtnDisabled]}
//             onPress={handleLogin}
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator color="#FFFFFF" size="small" />
//             ) : (
//               <Text style={styles.loginbtnText}>Sign In</Text>
//             )}
//           </TouchableOpacity>

//           {/* Footer Text */}
//           <Text style={styles.footerText}>
//             Secure login powered by JCN Technology
//           </Text>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   scrollContent: {
//     paddingHorizontal: 24,
//     paddingTop: 40,
//     paddingBottom: 30,
//   },
//   header: {
//     alignItems: "center",
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   logo: {
//     width: 160,
//     height: 160,
//   },
//   brandName: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#1A4D47",
//     letterSpacing: 0.5,
//   },
//   formContainer: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "700",
//     color: "#0F3432",
//     marginBottom: 8,
//     letterSpacing: -0.5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#6B7280",
//     marginBottom: 32,
//     fontWeight: "400",
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#1F2937",
//     marginBottom: 8,
//     letterSpacing: 0.3,
//   },
//   input: {
//     borderWidth: 1.5,
//     borderColor: "#D5E4E1",
//     padding: 14,
//     borderRadius: 10,
//     fontSize: 16,
//     color: "#1F2937",
//     backgroundColor: "#FFFFFF",
//     fontWeight: "500",
//   },
//   loginbtn: {
//     backgroundColor: "#e88f41ff",
//     padding: 16,
//     alignItems: "center",
//     borderRadius: 10,
//     marginTop: 10,
//     marginBottom: 20,
//     shadowColor: "#e88f41ff",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   loginbtnDisabled: {
//     backgroundColor: "#A0A0A0",
//     shadowOpacity: 0.15,
//   },
//   loginbtnText: {
//     color: "#FFFFFF",
//     fontWeight: "700",
//     fontSize: 16,
//     letterSpacing: 0.5,
//   },
//   footerText: {
//     textAlign: "center",
//     fontSize: 12,
//     color: "#9CA3AF",
//     fontWeight: "400",
//     marginTop: 8,
//   },
// });

"use client";

import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Application from "expo-application";
import Checkbox from "expo-checkbox";
import * as Device from "expo-device";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../../assets/images/jcn logo.jpg";

const Login = ({ navigation }) => {
  const [formdata, setFormdata] = useState({ UserId: "", Password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [deviceId, setDeviceId] = useState(null);

  // Fetch device ID whenever checkbox is checked
  // useEffect(() => {
  //   const fetchDeviceId = async () => {
  //     if (!isChecked) return; // only fetch if checked

  //     try {
  //       let id = null;
  //       if (Platform.OS === "ios") {
  //         id = await Application.getIosIdForVendorAsync();
  //       } else if (Platform.OS === "android") {
  //         id = Device.deviceId ?? Device.modelId ?? Device.osBuildId;
  //       }

  //       setDeviceId(id);
  //       await AsyncStorage.setItem("deviceId", id); // save for future use
  //       console.log("Device ID fetched:", id);
  //     } catch (error) {
  //       console.error("Error fetching device ID:", error);
  //     }
  //   };

  //   fetchDeviceId();
  // }, [isChecked]);

  const onHandleChange = (name, value) => {
    setFormdata((prevdata) => ({ ...prevdata, [name]: value }));
  };

 const handleLogin = async () => {
  setLoading(true);
  const { UserId, Password } = formdata;

  if (!UserId || !Password) {
    Alert.alert("Please fill in both fields");
    setLoading(false);
    return;
  }

  try {
    const response = await axios.post(
      "https://japps.jcntechnology.in/express/auth/login",
      formdata
    );

    // Save token and UserId
    await AsyncStorage.setItem("token", response.data.token);
    await AsyncStorage.setItem("UserId", UserId);

    Alert.alert("Alert", "Is your device registered?", [
      {
        text: "No",
        onPress: () =>
          Alert.alert(
            "Device Registration",
            "Please register your device first by checking the checkbox."
          ),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          if (isChecked && deviceId) {
            // Device is registered → proceed
            navigation.navigate("Dashboard");
          } else if (isChecked && !deviceId) {
            // Checkbox checked but device ID not yet fetched → fetch now
            fetchDeviceIdThenNavigate();
          } else {
            // Checkbox not checked → show alert
            Alert.alert(
              "Device Registration",
              "Your Device is not registered. Please Register Your Device."
            );
          }
        },
      },
    ]);
  } catch (error) {
    console.error("Login error:", error.response || error.message);
    Alert.alert("Error", "Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};

// Function to fetch device ID dynamically if checkbox is checked
const fetchDeviceIdThenNavigate = async () => {
  try {
    let id;
    if (Platform.OS === "ios") {
      id = await Application.getIosIdForVendorAsync();
    } else if (Platform.OS === "android") {
      id = Device.deviceId ?? Device.modelId ?? Device.osBuildId;
    }
    setDeviceId(id);
    await AsyncStorage.setItem("deviceId", id);
    navigation.navigate("Dashboard");
  } catch (error) {
    console.error("Error fetching device ID:", error);
    Alert.alert(
      "Error",
      "Could not fetch device ID. Please try again and ensure the checkbox is checked."
    );
  }
};


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={logo}
            alt="company_logo"
            style={styles.logo}
            resizeMode="cover"
          />
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          {/* Username Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#A0A0A0"
              value={formdata.UserId}
              onChangeText={(text) => onHandleChange("UserId", text)}
              editable={!loading}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={{ position: "relative" }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#A0A0A0"
                secureTextEntry={!showPassword}
                value={formdata.Password}
                onChangeText={(text) => onHandleChange("Password", text)}
                editable={!loading}
              />
              <Entypo
                name={showPassword ? "eye-with-line" : "eye"}
                size={24}
                color="gray"
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", marginVertical: 15, right: 30 }}
              />
            </View>
          </View>

          {/* Device Registration Checkbox */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#e88f41ff" : undefined}
            />
            <Text style={{ marginLeft: 8 }}>Device Registration</Text>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={[styles.loginbtn, loading && styles.loginbtnDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.loginbtnText}>Sign In</Text>
            )}
          </TouchableOpacity>

          {/* Footer Text */}
          <Text style={styles.footerText}>
            Secure login powered by JCN Technology
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollContent: { paddingHorizontal: 24, paddingTop: 40, paddingBottom: 30 },
  header: { alignItems: "center", marginTop: 20, marginBottom: 20 },
  logo: { width: 160, height: 160 },
  formContainer: { flex: 1, justifyContent: "center" },
  title: { fontSize: 32, fontWeight: "700", color: "#0F3432", marginBottom: 8 },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 32,
    fontWeight: "400",
  },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", color: "#1F2937", marginBottom: 8 },
  input: {
    borderWidth: 1.5,
    borderColor: "#D5E4E1",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    color: "#1F2937",
    backgroundColor: "#FFFFFF",
    fontWeight: "500",
  },
  loginbtn: {
    backgroundColor: "#e88f41ff",
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#e88f41ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginbtnDisabled: { backgroundColor: "#A0A0A0", shadowOpacity: 0.15 },
  loginbtnText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "400",
    marginTop: 8,
  },
});
