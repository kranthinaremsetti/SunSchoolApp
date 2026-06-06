import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { students } from "../data/students";
import { currentStudentId } from "../data/session";

export default function ProfileScreen() {
  const student = students.find(
    (s) => s.id === currentStudentId
  );

  if (!student) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Student not found
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Student Profile
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Name:
        </Text>
        <Text style={styles.value}>
          {student.name}
        </Text>

        <Text style={styles.label}>
          Class:
        </Text>
        <Text style={styles.value}>
          {student.className}
        </Text>

        <Text style={styles.label}>
          Roll Number:
        </Text>
        <Text style={styles.value}>
          {student.rollNo}
        </Text>

        <Text style={styles.label}>
          Parent ID:
        </Text>
        <Text style={styles.value}>
          {student.parentId}
        </Text>
      </View>
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
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    marginTop: 5,
    color: "#374151",
  },

  errorText: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});