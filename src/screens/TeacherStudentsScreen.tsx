import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { students } from "../data/students";

export default function TeacherStudentsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Students
      </Text>

      {students.map((student) => (
        <View
          key={student.id}
          style={styles.card}
        >
          <Text style={styles.name}>
            {student.name}
          </Text>

          <Text>
            Class: {student.className}
          </Text>

          <Text>
            Roll No: {student.rollNo}
          </Text>

          <Text>
            Parent ID: {student.parentId}
          </Text>
        </View>
      ))}
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
    marginBottom: 8,
  },
});