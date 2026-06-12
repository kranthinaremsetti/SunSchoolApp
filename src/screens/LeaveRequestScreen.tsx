import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useState } from "react";

import {
  saveLeaveRequest
} from "../services/leaveService";
import { currentStudentId } from "../data/session";
import { leaveRequests } from "../data/leaveRequests";

export default function LeaveRequestScreen() {
  const [reason, setReason] = useState("");
  const [fromDate, setFromDate] =
    useState("");
  const [toDate, setToDate] =
    useState("");

  const submitLeave = async() => {
    if (
      !reason ||
      !fromDate ||
      !toDate
    ) {
      Alert.alert(
        "Error",
        "Fill all fields"
      );
      return;
    }

    await saveLeaveRequest(
  currentStudentId!,
  reason,
  fromDate,
  toDate
);

    Alert.alert(
      "Success",
      "Leave Request Submitted"
    );

    setReason("");
    setFromDate("");
    setToDate("");
    console.log("Leave Requests:", leaveRequests);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Apply Leave
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Reason"
        value={reason}
        onChangeText={setReason}
      />

      <TextInput
        style={styles.input}
        placeholder="From Date"
        value={fromDate}
        onChangeText={setFromDate}
      />

      <TextInput
        style={styles.input}
        placeholder="To Date"
        value={toDate}
        onChangeText={setToDate}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={submitLeave}
      >
        <Text style={styles.buttonText}>
          Submit Leave
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