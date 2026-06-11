import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";

import { addResult } from "../data/results";

export default function TeacherResultsScreen() {
  const [studentId, setStudentId] =
    useState("");
  const [subject, setSubject] =
    useState("");
  const [marks, setMarks] =
    useState("");

  const submitResult = () => {
    if (
      !studentId ||
      !subject ||
      !marks
    ) {
      Alert.alert(
        "Error",
        "Fill all fields"
      );
      return;
    }

    addResult(
      Number(studentId),
      subject,
      Number(marks)
    );

    Alert.alert(
      "Success",
      "Marks Added"
    );

    setStudentId("");
    setSubject("");
    setMarks("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter Marks
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChangeText={setStudentId}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
      />

      <TextInput
        style={styles.input}
        placeholder="Marks"
        value={marks}
        onChangeText={setMarks}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={submitResult}
      >
        <Text style={styles.buttonText}>
          Save Marks
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

  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});