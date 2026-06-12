import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useState,
  useEffect,
} from "react";

import { currentStudentId } from "../data/session";

import { getLeaveRequests } from "../services/leaveService";

export default function LeaveHistoryScreen() {
  const [studentLeaves, setStudentLeaves] =
    useState<any[]>([]);

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {
    const leaves =
      await getLeaveRequests();

    const filteredLeaves =
      leaves.filter(
        (leave) =>
          leave.studentId ===
          currentStudentId
      );

    setStudentLeaves(
      filteredLeaves
    );
  };

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
            key={leave.firestoreId}
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