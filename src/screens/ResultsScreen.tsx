import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { resultsData } from "../data/results";
import { currentStudentId } from "../data/session";

export default function ResultsScreen() {
  const studentResults = resultsData.filter(
    (result) =>
      result.studentId === currentStudentId
  );

  const totalMarks = studentResults.reduce(
    (sum, result) => sum + result.marks,
    0
  );

  const percentage =
    studentResults.length > 0
      ? (
          totalMarks /
          studentResults.length
        ).toFixed(2)
      : "0";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Results
      </Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>
          Total Marks: {totalMarks}
        </Text>

        <Text style={styles.summaryText}>
          Percentage: {percentage}%
        </Text>
      </View>

      {studentResults.map((result) => (
        <View
          key={result.subject}
          style={styles.card}
        >
          <Text style={styles.subject}>
            {result.subject}
          </Text>

          <Text style={styles.marks}>
            Marks: {result.marks}
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

  summaryCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },

  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  subject: {
    fontSize: 20,
    fontWeight: "bold",
  },

  marks: {
    fontSize: 18,
    marginTop: 8,
  },
});