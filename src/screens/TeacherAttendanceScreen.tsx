import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useState } from "react";
import { studentsData } from "../constants/studentsData";
import { Picker } from "@react-native-picker/picker";
import { classesData } from "../constants/classesData";
import { generatedNotifications } from "../services/notificationService";
export default function TeacherAttendanceScreen() {
  const [students, setStudents] = useState(studentsData);
  const [selectedClass, setSelectedClass] =
  useState("5th Class");
  const toggleAttendance = (id: number) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              present: !student.present,
            }
          : student
      )
    );
  };
  const submitAttendance = () => {
    const presentCount = students.filter(
      (student) => student.present
    ).length;

    const absentCount = students.length - presentCount;
    const absentStudents = students.filter(
      (student) => !student.present
    );

    generatedNotifications.length = 0;

    absentStudents.forEach((student) => {
      generatedNotifications.push({
        id: Date.now() + student.id,
        title: "Attendance Alert",
        message: `${student.name} was absent in ${selectedClass}.`,
      });
    });
    Alert.alert(
      "Attendance Submitted",
      `Class: ${selectedClass}\nPresent: ${presentCount}\nAbsent: ${absentCount}`
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Take Attendance
      </Text>
      <View style={styles.pickerContainer}>
      <Text style={styles.label}>
        Select Class
      </Text>

      <Picker
        selectedValue={selectedClass}
        onValueChange={(itemValue) =>
          setSelectedClass(itemValue)
        }
      >
        {classesData.map((className) => (
          <Picker.Item
            key={className}
            label={className}
            value={className}
          />
        ))}
      </Picker>
      <Text>
        Selected: {selectedClass}
      </Text>
    </View>
      <ScrollView>
        {students.map((student) => (
        <TouchableOpacity
          key={student.id}
          style={[
          styles.studentItem,
          {
            backgroundColor: student.present
              ? "#DCFCE7"
              : "#FEE2E2",
          },
        ]}
          onPress={() => toggleAttendance(student.id)}
        >
          <Text>
            {student.present ? "🟢" : "🔴"} {student.name}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitAttendance}
      >
        <Text style={styles.submitButtonText}>
          Submit Attendance
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 15,
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
  pickerContainer: {
  backgroundColor: "white",
  borderRadius: 10,
  marginBottom: 20,
  elevation: 2,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  submitButton: {
  backgroundColor: "#2563EB",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 20,
  marginBottom: 20,
},

submitButtonText: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
},
});