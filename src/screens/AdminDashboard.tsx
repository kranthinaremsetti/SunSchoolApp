import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

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
    <View style={styles.container}>
            <TouchableOpacity
        style={styles.card}
        onPress={() =>
            navigation.navigate("AdminStudents")
        }
        >
        <Text>
            Students: {students.length}
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.card}
        >
        <Text>
            Teachers: {teachers.length}
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.card}
        onPress={() =>
            navigation.navigate("AdminFees")
        }
        >
        <Text>
            Pending Fees: ₹{pendingFees}
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("AdminReports")
        }
      >
        <Text>
          Reports
        </Text>
      </TouchableOpacity>
      
    </View>
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
});