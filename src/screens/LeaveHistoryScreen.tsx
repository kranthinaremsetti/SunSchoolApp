import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { leaveRequests } from "../data/leaveRequests";
import { currentStudentId } from "../data/session";

export default function LeaveHistoryScreen() {
  const studentLeaves =
    leaveRequests.filter(
      (leave) =>
        leave.studentId ===
        currentStudentId
    );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Leave History
      </Text>

      {studentLeaves.length === 0 ? (
        <Text style={styles.emptyText}>
          No leave requests found.
        </Text>
      ) : (
        studentLeaves.map((leave) => (
          <View
            key={leave.id}
            style={styles.card}
          >
            <Text style={styles.reason}>
              {leave.reason}
            </Text>

            <Text>
              From: {leave.fromDate}
            </Text>

            <Text>
              To: {leave.toDate}
            </Text>

            <Text>
              Status: {leave.status}
            </Text>
          </View>
        ))
      )}
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

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  reason: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "gray",
  },
});