import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TeacherDashboard() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Teacher 👨‍🏫
      </Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(
              "TeacherAttendance"
            )
          }
        >
          <Text style={styles.cardText}>
            Attendance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(
              "TeacherHomework"
            )
          }
        >
          <Text style={styles.cardText}>
            Homework
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(
              "TeacherAnnouncement"
            )
          }
        >
          <Text style={styles.cardText}>
            Announcements
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
        >
          <Text style={styles.cardText}>
            Students
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
    marginBottom: 25,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "white",
    width: "48%",
    height: 120,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});