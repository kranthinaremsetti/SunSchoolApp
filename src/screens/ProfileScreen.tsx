import { View, Text, StyleSheet } from "react-native";

import { students } from "../data/students";
import { parents } from "../data/parents";
import { currentStudentId } from "../data/session";

export default function ProfileScreen() {
  const student = students.find(
    (s) => s.id === currentStudentId
  );

  const parent = parents.find(
    (p) => p.studentId === currentStudentId
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Student Profile
      </Text>

      <View style={styles.card}>
        <Text style={styles.info}>
          Name: {student?.name}
        </Text>

        <Text style={styles.info}>
          Class: {student?.className}
        </Text>

        <Text style={styles.info}>
          Roll No: {student?.rollNo}
        </Text>

        <Text style={styles.info}>
          Parent Username: {parent?.username}
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

  info: {
    fontSize: 18,
    marginBottom: 12,
  },
});