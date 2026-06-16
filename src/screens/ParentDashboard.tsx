import { View, Text, StyleSheet,TouchableOpacity ,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import { currentStudentId } from "../data/session";
export default function ParentDashboard() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] =
  useState(true);
  const [student, setStudent] =
  useState<any>(null);
  useEffect(() => {
  loadStudent();
}, []);
const loadStudent = async () => {
  try {
    const students =
      await getStudents();

    const currentStudent =
      students.find(
        (s) =>
          s.id === currentStudentId
      );

    setStudent(currentStudent);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Loading...
      </Text>
    </View>
  );
}
  return (
    <ScrollView style={styles.container}>

      <View style={styles.studentCard}>
        <Text style={styles.studentName}>
          {student?.name}
        </Text>

        <Text style={styles.studentInfo}>
          Class: {student?.className}
        </Text>
        <Text style={styles.studentInfo}>
          Roll No: {student?.rollNo}
        </Text>

        <Text style={styles.welcome}>
        Welcome to SunSchool  👋
      </Text>
      </View>
      <View style={styles.row}>
  <View style={styles.summaryCard}>
    <Text style={styles.summaryValue}>
      92%
    </Text>
    <Text>Attendance</Text>
  </View>

  <View style={styles.summaryCard}>
    <Text style={styles.summaryValue}>
      ₹5000
    </Text>
    <Text>Fees Due</Text>
  </View>
</View>
      <TouchableOpacity
  style={styles.notificationButton}
  onPress={() => navigation.navigate("Notifications")}
>
  <Text style={styles.notificationButtonText}>
    View Notifications 🔔
  </Text>
</TouchableOpacity>

<View style={styles.row}>
  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Attendance")}
  >
    <Text style={styles.dashboardText}>📅 Attendance</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Profile")}
  >
    <Text style={styles.dashboardText}>👤 Profile</Text>
  </TouchableOpacity>
</View>

<View style={styles.row}>
  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Announcements")}
  >
    <Text style={styles.dashboardText}>📢 Announcements</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Homework")}
  >
    <Text style={styles.dashboardText}>
📚 Homework</Text>
  </TouchableOpacity>
</View>
<View style={styles.row}>
  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() => navigation.navigate("Fees")}
  >
    <Text style={styles.dashboardText}>
      💰 Fees
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.dashboardCard}
  onPress={() =>
    navigation.navigate("Timetable")
  }
>
  <Text style={styles.dashboardText}>
    🕒 Timetable
  </Text>
</TouchableOpacity>
</View>
<View style={styles.row}>
  <TouchableOpacity
    style={styles.dashboardCard}
    onPress={() =>
      navigation.navigate("Results")
    }
  >
    <Text style={styles.dashboardText}>
      📊 Results
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.dashboardCard}
  onPress={() =>
    navigation.navigate(
      "LeaveRequest"
    )
  }
>
  <Text style={styles.dashboardText}>
    📝 Leave
  </Text>
</TouchableOpacity>
</View>
<View style={styles.row}>
  <TouchableOpacity
  style={styles.dashboardCard}
  onPress={() =>
    navigation.navigate(
      "LeaveHistory"
    )
  }
>
  <Text style={styles.dashboardText}>
    📋 Leave History
  </Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.dashboardCard}
  onPress={() =>
    navigation.navigate(
      "Holidays"
    )
  }
>
  <Text style={styles.dashboardText}>
    📅 Holidays
  </Text>
</TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  welcome: {
  fontSize: 18,
  fontWeight: "600",
  color: "#2563EB",
  marginTop: 10,
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
  fontSize: 17,
  fontWeight: "bold",
  textAlign: "center",
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
singleCard: {
  backgroundColor: "white",
  width: "100%",
  height: 120,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
  marginBottom: 15,
},
summaryCard: {
  backgroundColor: "white",
  width: "48%",
  padding: 15,
  borderRadius: 12,
  alignItems: "center",
  elevation: 3,
  marginBottom: 15,
},
summaryValue: {
  fontSize: 24,
  fontWeight: "bold",
  color: "#2563EB",
},

});