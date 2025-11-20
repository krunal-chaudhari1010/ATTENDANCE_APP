// import { AntDesign } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { StyleSheet, Text, View } from "react-native";

// const UserProfile = () => {
//   const [isDeviceRegistered, setIsDeviceRegistered] = useState("");

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = await AsyncStorage.getItem("token");
//         const userid = await AsyncStorage.getItem("UserId");

//         if (!token || !userid) {
//           console.log("Token or UserId missing");
//           return;
//         }

//         const res = await axios.get(
//           `https://japps.jcntechnology.in/express/auth/user/${userid}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         console.log("User data:", res.data);
//         setIsDeviceRegistered(res.data.DeviceID);
//       } catch (error) {
//         console.error("Fetch error:", error.response || error.message);
//       }
//     };

//     fetchUserData();
//   }, []);
//   return (
//     <View style={{ marginTop: 50 }}>
//       <Text>UserProfile {isDeviceRegistered}</Text>
//       {isDeviceRegistered  ? (
//         <View style={{ display: "flex", flexDirection: "row" }}>
//           <AntDesign
//             name="check"
//             size={15}
//             color="green"
//             style={{ marginTop: 2, marginRight: 5, fontWeight: "bold" }}
//           />
//           <Text style={{ color: "green", fontWeight: "bold" }}>
//             Device Registered
//           </Text>
//         </View>
//       ) : (
//         <View>
//           <Text>"Not register"</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({});

import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UserProfile = ({ user, logout }) => {
  const [data, setData] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get user id and token from async storage
        const userId = await AsyncStorage.getItem("UserId");
        const token = await AsyncStorage.getItem("token");
        console.log("UserId:", userId);
        setToken(userId);
        console.log("Token:", token);
        if (!token) {
          console.warn("No token found");
          return;
        }
        // call API
        const res = await axios.get(
          `https://japps.jcntechnology.in/express/auth/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, []);

  // const data = user || {
  //   _id: "687b3e8d69cb855019ec0808",
  //   UserId: "krunal9313",
  //   Email: "krunal9313@example.com",
  //   Name: "Krunal Sunil Chaudhari",
  //   AppGrants: [
  //     {
  //       AppCode: "ATTENDANCE",
  //       DeviceID: "XYZ",
  //     },
  //   ],
  //   VerifiedTS: null,
  //   CreateTS: "2025-07-19T06:43:25.594Z",
  //   DeviceID: "BP22.250325.006",
  //   DeviceRegisteredOn: "2025-08-19T09:30:28.216Z",
  // };

  const formatDate = (dateString) => {
    if (!dateString) return "Not verified";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const InfoCard = ({ icon, label, value }) => (
    <View style={styles.infoCard}>
      <View style={styles.cardContent}>
        <MaterialIcons name={icon} size={24} color="#e88f41ff" />
        <View style={styles.cardText}>
          <Text style={styles.cardLabel}>{label}</Text>
          <Text style={styles.cardValue}>{value}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {data.Name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.userName}>{data.Name}</Text>
        </View>

        {/* Account Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <InfoCard icon="email" label="Email" value={data.Email} />

          <InfoCard icon="person" label="User ID" value={data.UserId} />
        </View>

        {/* Device Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Information</Text>

          <InfoCard
            icon="access-time"
            label="Device Registered"
            value={formatDate(data.DeviceRegisteredOn)}
          />
        </View>

        {/* Account Dates */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Timeline</Text>

          <InfoCard
            icon="calendar-today"
            label="Account Created"
            value={formatDate(data.CreateTS)}
          />

          {data.VerifiedTS ? (
            <InfoCard
              icon="check-circle"
              label="Verified On"
              value={formatDate(data.VerifiedTS)}
            />
          ) : (
            <View style={styles.infoCard}>
              <View style={styles.cardContent}>
                <MaterialIcons name="pending" size={24} color="#F59E0B" />
                <View style={styles.cardText}>
                  <Text style={styles.cardLabel}>Verification Status</Text>
                  <Text style={styles.cardValue}>Pending</Text>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <MaterialIcons name="edit" size={18} color="white" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <MaterialIcons name="security" size={18} color="#e88f41ff" />
            <Text style={styles.buttonTextSecondary}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDanger} onPress={logout}>
            <MaterialIcons name="logout" size={18} color="white" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    marginTop: 50,
  },

  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#e88f41ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  userName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1F2937",
  },
  userHandle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  section: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    marginLeft: 12,
    flex: 1,
  },
  cardLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1F2937",
  },
  grantCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
  },
  grantContent: {
    marginLeft: 12,
    flex: 1,
  },
  grantApp: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
  grantDevice: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  noData: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    paddingVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: "#e88f41ff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  buttonSecondary: {
    backgroundColor: "#F0F9FF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e88f41ff",
    marginBottom: 8,
  },
  buttonDanger: {
    backgroundColor: "#EF4444",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  buttonTextSecondary: {
    color: "#e88f41ff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  footer: {
    height: 20,
  },
});

export default UserProfile;
