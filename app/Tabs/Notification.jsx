import { StyleSheet, Text, View } from "react-native";

const Notification = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});

//I will create a Attendance Application in react native expo. In this app, User login first 
// and register there device first, without registration they will not able to login. After that 
// in user profile, Verification Status will be pendng, After registration there device id fetches 
// and it is shows in admin panel. When admin approves the in profile sectionn verification status 
// will be completed, but user cannot check regularly their proffile. So I have a plan for 
// notification. When admin approve their device user get the notification that yoour device is 
// registered. Like that. No other can get that notification. If A users notifiication cannot get 
// the B's notification. Understand What I am explaining? And others things also like Admin wants 
// to notify all about leave so they can notify by notification. Means I want to create that kind 
// of feature that enhance the usage of application. If User A apply for leave and admin approve or 
// rejects the leave then he get the notification. Or any kind of notification is tyhat. 
// Like Developer updates the app so admin notify the users to update the app.
