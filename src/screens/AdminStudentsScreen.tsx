import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import { getStudents } from "../services/studentService";
import { useNavigation } from "@react-navigation/native";
export default function AdminStudentsScreen() {
  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadStudents();
  }, []);
  const navigation = useNavigation<any>();

  const loadStudents = async () => {
    try {
      const data =
        await getStudents();

      setStudents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
  <Text style={styles.title}>
    Student Management
  </Text>

  <TouchableOpacity
    style={styles.addButton}
    onPress={() =>
      navigation.navigate("AddStudent")
    }
  >
    <Text style={styles.addButtonText}>
      ➕ Add
    </Text>
  </TouchableOpacity>
</View>

      {students.map((student) => (
        <View
          key={student.id}
          style={styles.card}
        >
          <Text style={styles.name}>
            {student.name}
          </Text>

          <Text>
            Class: {student.className}
          </Text>

          <Text>
            Roll No: {student.rollNo}
          </Text>

          <Text>
            Parent ID: {student.parentId}
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
  header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
},

addButton: {
  backgroundColor: "#2563EB",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 8,
},

addButtonText: {
  color: "white",
  fontWeight: "bold",
},
});