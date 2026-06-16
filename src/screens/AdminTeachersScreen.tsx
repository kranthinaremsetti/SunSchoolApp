import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { teachers } from "../data/teachers";

export default function AdminTeachersScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Teacher Management
      </Text>

      {teachers.map((teacher) => (
        <View
          key={teacher.id}
          style={styles.card}
        >
          <Text style={styles.name}>
            {teacher.name}
          </Text>

          <Text>
            Subject: {teacher.subject}
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