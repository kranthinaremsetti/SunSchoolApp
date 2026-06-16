  import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import { useEffect, useState } from "react";
  import { teachers } from "../data/teachers";
  import { useNavigation } from "@react-navigation/native";
import { getStudents } from "../services/studentService";
import { getFees } from "../services/feeService";
  export default function AdminDashboard() {
    const [pendingFees,
  setPendingFees] =
  useState(0);
    const [studentCount, setStudentCount] =
  useState(0);

useEffect(() => {
  loadCounts();
}, []);
const loadCounts = async () => {
  const students =
    await getStudents();

  const fees =
    await getFees();

  const totalPendingFees =
    fees.reduce(
      (total, fee) =>
        total + fee.dueAmount,
      0
    );

  setStudentCount(
    students.length
  );

  setPendingFees(
    totalPendingFees
  );
};
    const navigation = useNavigation<any>();
    return (
              <ScrollView style={styles.container}>
                <View style={styles.adminCard}>
            <Text style={styles.adminTitle}>
              🏫 Sun School Admin
            </Text>

            <Text style={styles.adminInfo}>
              School Management Dashboard
            </Text>
          </View>
          <View style={styles.row}>
    <View style={styles.summaryCard}>
      <Text style={styles.summaryValue}>
        {studentCount}
      </Text>
      <Text>Students</Text>
    </View>

    <View style={styles.summaryCard}>
      <Text style={styles.summaryValue}>
        {teachers.length}
      </Text>
      <Text>Teachers</Text>
    </View>
  </View>
  <View style={styles.row}>
  <View style={styles.summaryCard}>
    <Text style={styles.summaryValue}>
      ₹{pendingFees}
    </Text>
    <Text>Fees Due</Text>
  </View>

  <View style={styles.summaryCard}>
    <Text style={styles.summaryValue}>
      4
    </Text>
    <Text>Modules</Text>
  </View>
</View>
              <TouchableOpacity
          style={styles.card}
          onPress={() =>
              navigation.navigate("AdminStudents")
          }
          >
          <Text style={styles.cardText}>
              👨‍🎓 Students
          </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.card}
          onPress={() =>
          navigation.navigate(
            "AdminTeachers"
          )
        }
          >
          <Text style={styles.cardText}>
              👨‍🏫 Teachers
          </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.card}
          onPress={() =>
              navigation.navigate("AdminFees")
          }
          >
          <Text style={styles.cardText}>
            💰 Fees
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("AdminReports")
          }
        >
          <Text style={styles.cardText}>
          📈 Reports
          </Text>
        </TouchableOpacity>
  <TouchableOpacity
  style={styles.card}
>
  <Text style={styles.cardText}>
    📅 Holidays
  </Text>
</TouchableOpacity>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F8FAFC",
    },

    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    },

    card: {
  backgroundColor: "white",
  height: 100,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  elevation: 3,
  marginBottom: 15,
},
    cardText: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subText: {
      fontSize: 16,
      color: "gray",
    },
    adminCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },

  adminTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  adminInfo: {
    marginTop: 5,
    color: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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