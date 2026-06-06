import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { attendanceRecords } from "../data/attendance";
import { currentStudentId } from "../data/session";

export default function AttendanceScreen() {
  const studentAttendance = attendanceRecords.filter(
  (record) => record.studentId === currentStudentId
);
  const totalDays = studentAttendance.length;

  const presentDays = studentAttendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absentDays = totalDays - presentDays;

  const attendancePercentage =
  totalDays === 0
    ? "0"
    : ((presentDays / totalDays) * 100).toFixed(0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Attendance
      </Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>
          Attendance Percentage: {attendancePercentage}%
        </Text>

        <Text style={styles.summaryText}>
          Present Days: {presentDays}
        </Text>

        <Text style={styles.summaryText}>
          Absent Days: {absentDays}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Attendance History
      </Text>

      {studentAttendance.map((item, index) => (
        <View
          key={index}
          style={styles.historyCard}
        >
          <Text>{item.date}</Text>

          <Text
            style={{
              color:
                item.status === "Present"
                  ? "green"
                  : "red",
              fontWeight: "bold",
            }}
          >
            {item.status}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },

  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  historyCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});