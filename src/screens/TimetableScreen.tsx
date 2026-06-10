import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { timetableData } from "../data/timetable";

export default function TimetableScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Timetable
      </Text>

      {timetableData.map((item) => (
        <View
          key={item.day}
          style={styles.card}
        >
          <Text style={styles.day}>
            {item.day}
          </Text>

          {item.subjects.map(
            (subject, index) => (
              <Text
                key={index}
                style={styles.subject}
              >
                • {subject}
              </Text>
            )
          )}
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

  day: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subject: {
    fontSize: 16,
    marginBottom: 5,
  },
});