import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { useState } from "react";
import { saveStudent } from "../services/studentService";

export default function AddStudentScreen() {
  const [name, setName] =
    useState("");

  const [className, setClassName] =
    useState("");

  const [rollNo, setRollNo] =
    useState("");

  const [parentId, setParentId] =
    useState("");

  const submitStudent = async () => {
    if (
      !name ||
      !className ||
      !rollNo ||
      !parentId
    ) {
      Alert.alert(
        "Error",
        "Fill all fields"
      );
      return;
    }

    await saveStudent(
      name,
      className,
      Number(rollNo),
      Number(parentId)
    );

    Alert.alert(
      "Success",
      "Student Added"
    );

    setName("");
    setClassName("");
    setRollNo("");
    setParentId("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add Student
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Class"
        value={className}
        onChangeText={setClassName}
      />

      <TextInput
        style={styles.input}
        placeholder="Roll No"
        value={rollNo}
        onChangeText={setRollNo}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Parent ID"
        value={parentId}
        onChangeText={setParentId}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={submitStudent}
      >
        <Text style={styles.buttonText}>
          Add Student
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