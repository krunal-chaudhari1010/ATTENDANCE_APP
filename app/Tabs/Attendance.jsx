import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Drawer } from "react-native-drawer-layout";

const Attendance = () => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => <Text>Drawer content</Text>}
      >
        <Pressable
          onPress={() => setOpen(!open)}
          onHoverOut={() => setOpen(false)}
          style={{
            padding: 10,
            backgroundColor: "#007bff",
            borderRadius: 5,
            width: 120,
          }}
        >
          <Text style={{ color: "white" }}>
            {open ? "Close drawer" : "Open drawer"}
          </Text>
        </Pressable>
      </Drawer>
    </View>
  );
};

export default Attendance;
