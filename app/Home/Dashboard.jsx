// import {
//   AntDesign,
//   Entypo,
//   FontAwesome,
//   Ionicons,
//   Octicons,
// } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Pressable, StyleSheet, Text, View } from "react-native";

// const Dashboard = ({ navigation }) => {
//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem("token");
//       navigation.replace("Login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   return (

//     <View style={styles.container}>

//       <View style={styles.tabs_view}>
//         <Pressable
//           style={styles.attendance_report_pressable}
//           onPress={() => navigation.navigate("AttendanceReport")}
//         >
//           <View style={styles.attendance_report_icon}>
//             <Ionicons name="newspaper-outline" size={24} color="black" />
//           </View>
//           <Text style={styles.attendance_report_text}>Attendance Report</Text>
//           <View style={styles.attendance_report_open_icon}>
//             <Entypo name="chevron-right" size={24} color="black" />
//           </View>
//         </Pressable>

//         <Pressable
//           style={styles.summary_report_pressable}
//           onPress={() => navigation.navigate("LeaveReport")}
//         >
//           <View style={styles.summmary_report_icon}>
//             <Octicons name="repo-pull" size={24} color="black" />
//           </View>
//           <Text style={styles.summary_report_text}>Leave Report</Text>
//           <View style={styles.summary_report_open_icon}>
//             <Entypo name="chevron-right" size={24} color="black" />
//           </View>
//         </Pressable>

//         <Pressable
//           style={styles.generate_report_pressable}
//           onPress={() => navigation.navigate("TeamMembers")}
//         >
//           <View style={styles.generate_report_icon}>
//             <AntDesign name="team" color="#000" size={24} />
//           </View>
//           <Text style={styles.generate_report_text}>Team Members</Text>
//           <View style={styles.generate_report_open_icon}>
//             <Entypo name="chevron-right" size={24} color="black" />
//           </View>
//         </Pressable>

//         <Pressable
//           style={styles.overtime_employees_pressable}
//           onPress={() => navigation.navigate("Profile")}
//         >
//           <View style={styles.overtime_employees_icon}>
//             <FontAwesome name="user-circle" color="#000" size={24} />
//           </View>
//           <Text style={styles.overtime_employees_text}>User Profile</Text>
//           <View style={styles.overtime_employees_open_icon}>
//             <Entypo name="chevron-right" size={24} color="black" />
//           </View>
//         </Pressable>
//       </View>

//       <Text onPress={handleLogout}>Logout</Text>
//     </View>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   tabs_view: {
//     marginTop: 20,
//     backgroundColor: "white",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 7,
//   },
//   attendance_report_pressable: {
//     backgroundColor: "#e89b43",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   attendance_report_icon: {
//     padding: 7,
//     width: 45,
//     height: 45,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   attendance_report_text: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   attendance_report_open_icon: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   summary_report_pressable: {
//     backgroundColor: "#e89b43",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   summmary_report_icon: {
//     padding: 7,
//     width: 45,
//     height: 45,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   summary_report_text: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   summary_report_open_icon: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   generate_report_pressable: {
//     backgroundColor: "#e89b43",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   generate_report_icon: {
//     padding: 7,
//     width: 45,
//     height: 45,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   generate_report_text: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   generate_report_open_icon: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   overtime_employees_pressable: {
//     backgroundColor: "#e89b43",
//     borderRadius: 6,
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   overtime_employees_icon: {
//     padding: 7,
//     width: 45,
//     height: 45,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   overtime_employees_text: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "600",
//     flex: 1,
//   },
//   overtime_employees_open_icon: {
//     width: 35,
//     height: 35,
//     borderRadius: 7,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

"use client";

import { AntDesign, FontAwesome, Ionicons, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Application from "expo-application";
import * as Device from "expo-device";

import { useEffect, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Dashboard = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        if (Platform.OS === "ios") {
          const idfv = await Application.getIosIdForVendorAsync();
          console.log("iOS Device ID (IDFV):", idfv);
          setDeviceId(idfv);
        } else if (Platform.OS === "android") {
          // Fallback: use expo-device’s unique ID (works in Expo Go)
          const androidId =
            Device.deviceId ?? Device.modelId ?? Device.osBuildId;
          // console.log("Android Device ID:", androidId);
          setDeviceId(androidId);
        }
      } catch (error) {
        console.error("Error getting device ID:", error);
      }
    };

    fetchDeviceId();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.replace("Login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.tabTitle}>Welcome to Dashboard </Text>
            <View style={styles.quickActionsContainer}>
              <Pressable
                style={styles.actionCard}
                onPress={() => {
                  setActiveTab("reports");
                  navigation.navigate("AttendanceReport");
                }}
              >
                <View style={styles.actionIcon}>
                  <Ionicons
                    name="newspaper-outline"
                    size={32}
                    color="#e88f41ff"
                  />
                </View>
                <Text style={styles.actionText}>Attendance Report</Text>
              </Pressable>

              <Pressable
                style={styles.actionCard}
                onPress={() => {
                  setActiveTab("reports");
                  navigation.navigate("LeaveReport");
                }}
              >
                <View style={styles.actionIcon}>
                  <Octicons name="repo-pull" size={32} color="#e88f41ff" />
                </View>
                <Text style={styles.actionText}>Leave Report</Text>
              </Pressable>
            </View>
          </View>
        );
      case "reports":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.tabTitle}>Reports</Text>
            <View style={styles.reportList}>
              <Pressable
                style={styles.reportItem}
                onPress={() => navigation.navigate("AttendanceReport")}
              >
                <Ionicons
                  name="newspaper-outline"
                  size={24}
                  color="#e88f41ff"
                />
                <Text style={styles.reportItemText}>Attendance Report</Text>
              </Pressable>

              <Pressable
                style={styles.reportItem}
                onPress={() => navigation.navigate("LeaveReport")}
              >
                <Octicons name="repo-pull" size={24} color="#e88f41ff" />
                <Text style={styles.reportItemText}>Leave Report</Text>
              </Pressable>
            </View>
          </View>
        );
      case "team":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.tabTitle}>Team Members</Text>
            <Pressable
              style={styles.largeCard}
              onPress={() => navigation.navigate("TeamMembers")}
            >
              <AntDesign name="team" size={48} color="#e88f41ff" />
              <Text style={styles.largeCardText}>View Team Members</Text>
            </Pressable>
          </View>
        );
      case "profile":
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.tabTitle}>Profile</Text>
            <Pressable
              style={styles.largeCard}
              onPress={() => navigation.navigate("Profile")}
            >
              <FontAwesome name="user-circle" size={48} color="#e88f41ff" />
              <Text style={styles.largeCardText}>View Your Profile</Text>
            </Pressable>

            <Pressable style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderContent()}
      </ScrollView>

      <View style={styles.bottomTabs}>
        <Pressable
          style={[styles.tabButton, activeTab === "home" && styles.activeTab]}
          onPress={() => setActiveTab("home")}
        >
          <Ionicons
            name="home"
            size={24}
            color={activeTab === "home" ? "#e88f41ff" : "#9ca3af"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "home" && styles.activeTabLabel,
            ]}
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabButton,
            activeTab === "reports" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("reports")}
        >
          <Ionicons
            name="document-text"
            size={24}
            color={activeTab === "reports" ? "#e88f41ff" : "#9ca3af"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "reports" && styles.activeTabLabel,
            ]}
          >
            Reports
          </Text>
        </Pressable>

        <Pressable
          style={[styles.tabButton, activeTab === "team" && styles.activeTab]}
          onPress={() => setActiveTab("team")}
        >
          <AntDesign
            name="team"
            size={24}
            color={activeTab === "team" ? "#e88f41ff" : "#9ca3af"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "team" && styles.activeTabLabel,
            ]}
          >
            Team
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.tabButton,
            activeTab === "profile" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("profile")}
        >
          <FontAwesome
            name="user-circle"
            size={24}
            color={activeTab === "profile" ? "#e88f41ff" : "#9ca3af"}
          />
          <Text
            style={[
              styles.tabLabel,
              activeTab === "profile" && styles.activeTabLabel,
            ]}
          >
            Profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    marginTop: 50,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  tabTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 24,
    marginTop: 16,
  },
  quickActionsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    marginBottom: 12,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1e293b",
    textAlign: "center",
  },
  reportList: {
    gap: 12,
  },
  reportItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reportItemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  largeCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  largeCardText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b",
    marginTop: 16,
  },
  logoutButton: {
    backgroundColor: "#ef8044ff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomTabs: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
    paddingBottom: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: "#e88f41ff",
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#9ca3af",
    marginTop: 4,
  },
  activeTabLabel: {
    color: "#e88f41ff",
  },
});
