import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { leaveRequests } from "../data/leaveRequests";
import { students } from "../data/students";

export default function LeaveRequestsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Leave Requests
      </Text>

      {leaveRequests.map((leave) => {
        const student = students.find(
          (s) => s.id === leave.studentId
        );

        return (
          <View
            key={leave.id}
            style={styles.card}
          >
            <Text style={styles.name}>
              {student?.name}
            </Text>

            <Text>
              Reason: {leave.reason}
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
        );
      })}
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

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});