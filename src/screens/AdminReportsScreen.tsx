import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { students } from "../data/students";
import { teachers } from "../data/teachers";
import { homeworkData } from "../data/homework";
import { announcements } from "../data/announcements";
import { leaveRequests } from "../data/leaveRequests";
import { feesData } from "../data/fees";

export default function AdminReportsScreen() {
  const pendingFees = feesData.reduce(
    (total, fee) => total + fee.dueAmount,
    0
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Reports Dashboard
      </Text>

      <View style={styles.card}>
        <Text>
          Students: {students.length}
        </Text>
      </View>

      <View style={styles.card}>
        <Text>
          Teachers: {teachers.length}
        </Text>
      </View>

      <View style={styles.card}>
        <Text>
          Homework Posted: {homeworkData.length}
        </Text>
      </View>

      <View style={styles.card}>
        <Text>
          Announcements: {announcements.length}
        </Text>
      </View>

      <View style={styles.card}>
        <Text>
          Leave Requests: {leaveRequests.length}
        </Text>
      </View>

      <View style={styles.card}>
        <Text>
          Pending Fees: ₹{pendingFees}
        </Text>
      </View>
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
});