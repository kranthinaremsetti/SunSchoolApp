import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { homeworkData } from "../data/homework";
import { students } from "../data/students";
import { currentStudentId } from "../data/session";

export default function HomeworkScreen() {
  const student = students.find(
    (s) => s.id === currentStudentId
  );

  const studentHomework = homeworkData.filter(
    (hw) => hw.className === student?.className
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Homework
      </Text>

      {studentHomework.map((hw) => (
        <View
          key={hw.id}
          style={styles.card}
        >
          <Text style={styles.subject}>
            📚 {hw.subject}
          </Text>

          <Text style={styles.task}>
            {hw.task}
          </Text>

          <Text style={styles.dueDate}>
            Due: {hw.dueDate}
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
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
  },

  subject: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  task: {
    fontSize: 16,
    marginBottom: 10,
  },

  dueDate: {
    fontSize: 14,
    color: "gray",
  },
});