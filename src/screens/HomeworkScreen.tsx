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

import { getHomework } from "../services/homeworkService";
import { getStudents } from "../services/studentService";
import { currentStudentId } from "../data/session";

export default function HomeworkScreen() {
  const [studentHomework, setStudentHomework] =
    useState<any[]>([]);

  useEffect(() => {
    loadHomework();
  }, []);

  const loadHomework = async () => {
    const students =
      await getStudents();

    const student =
      students.find(
        (s) =>
          s.id === currentStudentId
      );

    const homework =
      await getHomework();
    console.log("Student:", student);
console.log("Homework:", homework);
    const filteredHomework =
      homework.filter(
        (hw) =>
          hw.className ===
          student?.className
      );
        console.log(
  "Filtered Homework:",
  filteredHomework
);
    setStudentHomework(
      filteredHomework
    );
  };
return (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>
      Homework
    </Text>

    {studentHomework.map((hw) => (
      <View
        key={hw.firestoreId}
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