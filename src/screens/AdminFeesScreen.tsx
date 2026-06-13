import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import { getFees } from "../services/feeService";

import { getStudents } from "../services/studentService";

export default function AdminFeesScreen() {
  const [fees, setFees] =
    useState<any[]>([]);

  const [students, setStudents] =
    useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const feeData =
      await getFees();

    const studentData =
      await getStudents();

    setFees(feeData);
    setStudents(studentData);
    console.log("Students:", students);
    console.log("Fees:", fees);
      };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Fee Management
      </Text>

      {fees.map((fee) => {
        const student =
        students.find(
          (s) =>
            Number(s.id) ===
            Number(fee.studentId)
        );

        return (
          <View
            key={fee.firestoreId}
            style={styles.card}
          >
            <Text style={styles.name}>
              {student?.name}
            </Text>

            <Text>
              Total Fee: ₹
              {fee.totalFee}
            </Text>

            <Text>
              Paid: ₹
              {fee.paidAmount}
            </Text>

            <Text>
              Due: ₹
              {fee.dueAmount}
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