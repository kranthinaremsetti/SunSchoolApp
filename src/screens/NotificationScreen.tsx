import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { notifications } from "../data/notifications";
import { currentStudentId } from "../data/session";

export default function NotificationScreen() {
  const studentNotifications = notifications.filter(
  (notification) =>
    notification.studentId === currentStudentId
);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Notifications
      </Text>

      {studentNotifications.length === 0 ? (
        <Text style={styles.emptyText}>
          No notifications available.
        </Text>
      ) : (
        studentNotifications.map((item) => (
          <View
            key={item.id}
            style={styles.card}
          >
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text>
              {item.message}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
    color: "gray",
  },
});