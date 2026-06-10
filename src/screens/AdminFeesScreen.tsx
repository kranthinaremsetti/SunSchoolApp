import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { feesData } from "../data/fees";
import { students } from "../data/students";

export default function AdminFeesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Fee Management
      </Text>

      {feesData.map((fee) => {
        const student = students.find(
          (s) => s.id === fee.studentId
        );

        return (
          <View
            key={fee.studentId}
            style={styles.card}
          >
            <Text style={styles.name}>
              {student?.name}
            </Text>

            <Text>
              Total Fee: ₹{fee.totalFee}
            </Text>

            <Text>
              Paid: ₹{fee.paidAmount}
            </Text>

            <Text>
              Due: ₹{fee.dueAmount}
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
    marginBottom: 10,
  },
});