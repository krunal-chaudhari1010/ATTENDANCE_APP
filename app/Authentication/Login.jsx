// "use client";

// import { Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import * as Application from "expo-application";
// import Checkbox from "expo-checkbox";
// import * as Device from "expo-device";
// import { useRef, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Animated,
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
//   const [formdata, setFormdata] = useState({ UserId: "", Password: "" });
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setChecked] = useState(false);
//   const [deviceId, setDeviceId] = useState(null);
//   const [fadeMessage, setFadeMessage] = useState("");
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   // Function to show fade-in message
//   const showFadeMessage = (msg) => {
//     setFadeMessage(msg);
//     Animated.sequence([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: true,
//       }),
//       Animated.delay(3000),
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]).start(() => setFadeMessage(""));
//   };

//   const onHandleChange = (name, value) => {
//     setFormdata((prevdata) => ({ ...prevdata, [name]: value }));
//   };

//   // Fetch and store device ID
// const fetchDeviceId = async () => {
//   try {
//     let id;
//     if (Platform.OS === "ios") {
//       id = await Application.getIosIdForVendorAsync();
//     } else if (Platform.OS === "android") {
//       id = Device.deviceId ?? Device.modelId ?? Device.osBuildId;
//     }
//     if (id) {
//       setDeviceId(id);
//       await AsyncStorage.setItem("deviceId", id);
//     }
//     return id;
//   } catch (error) {
//     console.error("Error fetching device ID:", error);
//   }
// };

//   const handleLogin = async () => {
//     setLoading(true);
//     const { UserId, Password } = formdata;

//     if (!UserId || !Password) {
//       Alert.alert("Please fill in both fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       // If checkbox is NOT checked → ask if device is registered
//       if (!isChecked) {
//         Alert.alert("Alert", "Is your device registered?", [
//           {
//             text: "No",
//             onPress: () => {
//               showFadeMessage("Please register your device first for sign in");
//             },
//             style: "cancel",
//           },
//           {
//             text: "Yes",
//             onPress: async () => {
//               const id = await fetchDeviceId(); // ✅ only fetch here
//               if (id) {
//                 setChecked(true);
//                 setDeviceId(id);
//                 await AsyncStorage.setItem("deviceId", id);

//                 // Continue login after device registration
//                 const response = await axios.post(
//                   "https://japps.jcntechnology.in/express/auth/login",
//                   { UserId, Password, DeviceID: id }
//                 );

//                 await AsyncStorage.setItem("token", response.data.token);
//                 await AsyncStorage.setItem("UserId", UserId);
//                 navigation.navigate("Dashboard");
//               } else {
//                 showFadeMessage("Unable to fetch device ID. Please try again.");
//               }
//             },
//           },
//         ]);
//         setLoading(false);
//         return;
//       }

//       // If checkbox is already checked → proceed normally
//       let storedId = deviceId || (await AsyncStorage.getItem("deviceId"));
//       if (!storedId) storedId = await fetchDeviceId();

//       const response = await axios.post(
//         "https://japps.jcntechnology.in/express/auth/login",
//         { UserId, Password, DeviceID: storedId }
//       );

//       await AsyncStorage.setItem("token", response.data.token);
//       await AsyncStorage.setItem("UserId", UserId);
//       navigation.navigate("Dashboard");
//     } catch (error) {
//       console.error("Login error:", error.response || error.message);
//       Alert.alert("Error", "Something went wrong. Try again.");
//     } finally {
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
//           <Text style={styles.title}>Welcome Back</Text>
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
//                 secureTextEntry={!showPassword}
//                 value={formdata.Password}
//                 onChangeText={(text) => onHandleChange("Password", text)}
//                 editable={!loading}
//               />
//               <Entypo
//                 name={showPassword ? "eye-with-line" : "eye"}
//                 size={24}
//                 color="gray"
//                 onPress={() => setShowPassword(!showPassword)}
//                 style={{ position: "absolute", marginVertical: 15, right: 30 }}
//               />
//             </View>
//           </View>

//           {/* Device Registration Checkbox */}
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               marginBottom: 20,
//             }}
//           >
//             <Checkbox
//               value={isChecked}
//               onValueChange={setChecked}
//               color={isChecked ? "#e88f41ff" : undefined}
//             />
//             <Text style={{ marginLeft: 8 }}>Device Registration</Text>
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

//       {/* Fade Message */}
//       {fadeMessage !== "" && (
//         <Animated.View
//           style={{
//             opacity: fadeAnim,
//             position: "absolute",
//             bottom: 30,
//             alignSelf: "center",
//             backgroundColor: "#000000aa",
//             paddingHorizontal: 20,
//             paddingVertical: 10,
//             borderRadius: 10,
//             shadowColor: "#000",
//             shadowOffset: { width: 0, height: 4 },
//             shadowOpacity: 0.4,
//             shadowRadius: 8,
//             elevation: 8,
//           }}
//         >
//           <Text style={{ color: "#fff", fontWeight: "600" }}>
//             {fadeMessage}
//           </Text>
//         </Animated.View>
//       )}
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "white" },
//   scrollContent: { paddingHorizontal: 24, paddingTop: 40, paddingBottom: 30 },
//   header: { alignItems: "center", marginTop: 20, marginBottom: 20 },
//   logo: { width: 160, height: 160 },
//   formContainer: { flex: 1, justifyContent: "center" },
//   title: { fontSize: 32, fontWeight: "700", color: "#0F3432", marginBottom: 8 },
//   subtitle: {
//     fontSize: 16,
//     color: "#6B7280",
//     marginBottom: 32,
//     fontWeight: "400",
//   },
//   inputGroup: { marginBottom: 20 },
//   label: { fontSize: 14, fontWeight: "600", color: "#1F2937", marginBottom: 8 },
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
//   loginbtnDisabled: { backgroundColor: "#A0A0A0", shadowOpacity: 0.15 },
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
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
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
  const [fadeMessage, setFadeMessage] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Fade-in message popup
  const showFadeMessage = (msg) => {
    setFadeMessage(msg);
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.delay(2500),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => setFadeMessage(""));
  };

  const onHandleChange = (name, value) => {
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  //   const fetchDeviceId = async () => {
  // //   try {
  // //     let id;
  // //     if (Platform.OS === "ios") {
  // //       id = await Application.getIosIdForVendorAsync();
  // //     } else if (Platform.OS === "android") {
  // //       id = Device.deviceId ?? Device.modelId ?? Device.osBuildId;
  // //     }
  // //     if (id) {
  // //       setDeviceId(id);
  // //       await AsyncStorage.setItem("deviceId", id);
  // //     }
  // //     return id;
  // //   } catch (error) {
  // //     console.error("Error fetching device ID:", error);
  // //   }
  // // };
  // Fetch device ID for Android/iOS
  const fetchDeviceId = async () => {
    try {
      let id = null;

      if (Platform.OS === "ios") {
        // iOS unique identifier
        id = await Application.getIosIdForVendorAsync();
      } else if (Platform.OS === "android") {
        id = Device.deviceId ?? Device.modelId ?? Device.osBuildId;
      }

      if (id) {
        await AsyncStorage.setItem("deviceId", id);
        console.log("Device ID fetched:", id);
        return id;
      } else {
        console.warn("Unable to fetch device ID");
        return null;
      }
    } catch (error) {
      console.error("Error fetching device ID:", error);
      return null;
    }
  };

  // MAIN LOGIN FUNCTION
  const handleLogin = async () => {
    setLoading(true);

    const { UserId, Password } = formdata;

    if (!UserId || !Password) {
      Alert.alert("Please fill in both fields");
      setLoading(false);
      return;
    }

    try {
      // If checkbox NOT checked → Ask Yes/No
      if (!isChecked) {
        Alert.alert("Alert", "Is your device registered?", [
          {
            text: "No",
            style: "cancel",
            onPress: () => showFadeMessage("Please register your device first"),
          },
          {
            text: "Yes",
            onPress: () => {
              (async () => {
                const id = await fetchDeviceId();

                if (!id) {
                  showFadeMessage("Unable to fetch device ID");
                  setLoading(false);
                  return;
                }

                setChecked(true);

                try {
                  const response = await axios.post(
                    "https://japps.jcntechnology.in/express/auth/login",
                    { UserId, Password, DeviceID: id }
                  );

                  await AsyncStorage.setItem("UserId", UserId);
                  await AsyncStorage.setItem("token", response.data.token);

                  navigation.navigate("Dashboard");
                } catch (error) {
                  console.error("Error during login:", error);
                  Alert.alert("Error", "Login failed. Try again.");
                } finally {
                  setLoading(false);
                }
              })();
            },
          },
        ]);

        return; // exit early because alert handles the flow
      }

      // Checkbox already CHECKED → normal login
      let storedId = await AsyncStorage.getItem("deviceId");

      if (!storedId) {
        storedId = await fetchDeviceId();
      }

      if (!storedId) {
        showFadeMessage("Unable to get device ID");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "https://japps.jcntechnology.in/express/auth/login",
        { UserId, Password, DeviceID: storedId }
      );

      await AsyncStorage.setItem("UserId", UserId);
      await AsyncStorage.setItem("token", response.data.token);

      navigation.navigate("Dashboard");
    } catch (error) {
      console.log("Login error:", error);
      Alert.alert("Error", "Something went wrong. Try again.");
    } finally {
      setLoading(false);
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

        {/* FORM SECTION */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>

          {/* Username */}
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

          {/* Password */}
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
                style={{ position: "absolute", right: 30, marginVertical: 15 }}
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
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
              <Text style={styles.loginbtnText}>Sign In</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Secure login powered by JCN Technology
          </Text>
        </View>
      </ScrollView>

      {/* Fade Message */}
      {fadeMessage !== "" && (
        <Animated.View
          style={{
            opacity: fadeAnim,
            position: "absolute",
            bottom: 30,
            alignSelf: "center",
            backgroundColor: "#000000aa",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>
            {fadeMessage}
          </Text>
        </Animated.View>
      )}
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
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 32 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", color: "#1F2937", marginBottom: 8 },
  input: {
    borderWidth: 1.5,
    borderColor: "#D5E4E1",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  loginbtn: {
    backgroundColor: "#e88f41ff",
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#e88f41ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  loginbtnDisabled: {
    backgroundColor: "#A0A0A0",
  },
  loginbtnText: { color: "#FFF", fontWeight: "700", fontSize: 16 },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 8,
  },
});
