import { useNavigation } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Search = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const employeeName = item?.Name || "";
          const searchInput = input || "";

          if (employeeName.toLowerCase().includes(searchInput.toLowerCase())) {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("UserDetails", {
                    user: item,
                  })
                }
              >
                <View
                  style={{ marginVertical: 10, gap: 10, flexDirection: "row" }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      padding: 10,
                      backgroundColor: "#4b6cb7",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 16 }}>
                      {employeeName.charAt(0)}
                    </Text>
                  </View>

                  <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {employeeName}
                    </Text>
                    <Text style={{ marginTop: 5, color: "gray" }}>
                      ({item.UserId})
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }

          return null; // ensure nothing is rendered if no match
        }}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
