import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ParentDashboard() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome Parent 👋
      </Text>

      <View style={styles.studentCard}>
        <Text style={styles.studentName}>
          Ravi Kumar
        </Text>

        <Text style={styles.studentInfo}>
          Class: 5th Class
        </Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
        style={styles.notificationButton}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.notificationButtonText}>
          View Notifications 🔔
        </Text>
      </TouchableOpacity>
  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Attendance")}
  >
    <Text style={styles.dashboardText}>Attendance</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Profile")}
  >
    <Text style={styles.dashboardText}>Profile</Text>
  </TouchableOpacity>
</View>

<View style={styles.row}>
  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Announcements")}
  >
    <Text style={styles.dashboardText}>Announcements</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Homework")}
  >
    <Text style={styles.dashboardText}>Homework</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  welcome: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  studentCard: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
  },

  studentName: {
    fontSize: 22,
    fontWeight: "bold",
  },

  studentInfo: {
    marginTop: 8,
    fontSize: 16,
    color: "gray",
  },
  dashboardCard: {
  backgroundColor: "white",
  width: "48%",
  height: 120,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
  marginBottom: 15,
},

dashboardText: {
  fontSize: 20,
  fontWeight: "bold",
},
notificationButton: {
  backgroundColor: "#2563EB",
  padding: 12,
  borderRadius: 10,
  alignItems: "center",
  marginBottom: 20,
},

notificationButtonText: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
},
});