import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { students } from "../data/students";
import { teachers } from "../data/teachers";
import { announcements } from "../data/announcements";
import { homeworkData } from "../data/homework";
import { feesData } from "../data/fees";
import { useNavigation } from "@react-navigation/native";

export default function AdminDashboard() {
  const pendingFees = feesData.reduce(
    (total, fee) => total + fee.dueAmount,
    0
  );
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
      {students.length}
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
            <TouchableOpacity
        style={styles.card}
        onPress={() =>
            navigation.navigate("AdminStudents")
        }
        >
        <Text>
            👨‍🎓 Students
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.card}
        >
        <Text>
            👨‍🏫 Teachers
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.card}
        onPress={() =>
            navigation.navigate("AdminFees")
        }
        >
        <Text >
          💰 Fees
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("AdminReports")
        }
      >
        <Text>
         📈 Reports
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
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
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