import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { leaveRequests } from "../data/leaveRequests";
import { students } from "../data/students";
import { updateLeaveStatus } from "../data/leaveRequests";

export default function LeaveRequestsScreen() {
  const [, forceUpdate] = useState(0);
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

    {leave.status === "Pending" && (
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.approveButton}
          onPress={() => {
          updateLeaveStatus(
            leave.id,
            "Approved"
          );
          forceUpdate((v) => v + 1);
}}
        >
          <Text style={styles.buttonText}>
            Approve
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rejectButton}
          onPress={() => {
          updateLeaveStatus(
            leave.id,
            "Rejected"
          );
          forceUpdate((v) => v + 1);
        }}
        >
          <Text style={styles.buttonText}>
            Reject
          </Text>
        </TouchableOpacity>
      </View>
    )}
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
  buttonRow: {
  flexDirection: "row",
  marginTop: 10,
},

approveButton: {
  backgroundColor: "green",
  padding: 10,
  borderRadius: 8,
  marginRight: 10,
},

rejectButton: {
  backgroundColor: "red",
  padding: 10,
  borderRadius: 8,
},

buttonText: {
  color: "white",
  fontWeight: "bold",
},
});