import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation }
from "@react-navigation/native";

import {
  useEffect,
  useState,
} from "react";

import { getFees } from "../services/feeService";

import { getStudents } from "../services/studentService";

export default function AdminFeesScreen() {
  const navigation =
  useNavigation<any>();
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
    console.log("Students:", studentData);
    console.log("Fees:", feeData);
      };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
  <Text style={styles.title}>
    Fee Management
  </Text>

  <TouchableOpacity
    style={styles.addButton}
    onPress={() =>
      navigation.navigate("AddFee")
    }
  >
    <Text style={styles.addButtonText}>
      ➕ Add
    </Text>
  </TouchableOpacity>
</View>

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
  header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
},

addButton: {
  backgroundColor: "#2563EB",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
},

addButtonText: {
  color: "white",
  fontWeight: "bold",
},
});