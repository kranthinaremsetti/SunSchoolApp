import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { studentsData } from "../constants/studentsData";
export default function TeacherAttendanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Take Attendance
      </Text>
      <ScrollView>
        {studentsData.map((student) => (
          <View key={student.id} style={styles.studentItem}>
            <Text>{student.present ? "🟢" : "🔴"}
            {student.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  studentItem: {
    backgroundColor: "lightgray",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});