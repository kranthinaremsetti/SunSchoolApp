import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { feesData } from "../data/fees";
import { currentStudentId } from "../data/session";

export default function FeesScreen() {
  const fee = feesData.find(
    (f) => f.studentId === currentStudentId
  );

  if (!fee) {
    return (
      <View style={styles.container}>
        <Text>No fee information found.</Text>
      </View>
    );
  }

  const handlePayment = () => {
    Alert.alert(
      "Payment",
      "Payment Successful (Demo)"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Fees Details
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Total Fee
        </Text>
        <Text style={styles.value}>
          ₹{fee.totalFee}
        </Text>

        <Text style={styles.label}>
          Paid Amount
        </Text>
        <Text style={styles.value}>
          ₹{fee.paidAmount}
        </Text>

        <Text style={styles.label}>
          Due Amount
        </Text>
        <Text style={styles.value}>
          ₹{fee.dueAmount}
        </Text>

        <Text style={styles.label}>
          Due Date
        </Text>
        <Text style={styles.value}>
          {fee.dueDate}
        </Text>

        <TouchableOpacity
          style={styles.payButton}
          onPress={handlePayment}
        >
          <Text style={styles.payButtonText}>
            Pay Now
          </Text>
        </TouchableOpacity>
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
    color: "#374151",
    marginTop: 5,
  },

  payButton: {
    backgroundColor: "#16A34A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },

  payButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});