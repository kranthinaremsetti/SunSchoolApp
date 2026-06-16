import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { useState } from "react";
import { saveFee } from "../services/feeService";

export default function AddFeeScreen() {
  const [studentId, setStudentId] =
    useState("");

  const [totalFee, setTotalFee] =
    useState("");

  const [paidAmount, setPaidAmount] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const submitFee = async () => {
    if (
      !studentId ||
      !totalFee ||
      !paidAmount ||
      !dueDate
    ) {
      Alert.alert(
        "Error",
        "Fill all fields"
      );
      return;
    }

    try {
      await saveFee(
        Number(studentId),
        Number(totalFee),
        Number(paidAmount),
        dueDate
      );

      Alert.alert(
        "Success",
        "Fee Added"
      );

      setStudentId("");
      setTotalFee("");
      setPaidAmount("");
      setDueDate("");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error",
        "Failed to add fee"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add Fee
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
        placeholder="Total Fee"
        value={totalFee}
        onChangeText={setTotalFee}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Paid Amount"
        value={paidAmount}
        onChangeText={setPaidAmount}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Due Date (YYYY-MM-DD)"
        value={dueDate}
        onChangeText={setDueDate}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={submitFee}
      >
        <Text style={styles.buttonText}>
          Add Fee
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