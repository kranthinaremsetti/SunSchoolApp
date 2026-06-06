import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { parents } from "../data/parents";
import { teachers } from "../data/teachers";
import { setCurrentStudentId } from "../data/session";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<any>();
  const handleLogin = () => {
  const parent = parents.find(
    (p) =>
      p.username === username &&
      p.password === password
  );

  if (parent) {
    setCurrentStudentId(parent.studentId);

    navigation.navigate("ParentDashboard");

    return;
  }

  const teacher = teachers.find(
    (t) =>
      t.username === username &&
      t.password === password
  );

  if (teacher) {
    navigation.navigate("TeacherDashboard");

    return;
  }

  alert("Invalid Credentials");
};

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/school_logo.jpeg")}
        style={styles.logo}
      />

      <Text style={styles.schoolName}>SUN SCHOOL</Text>

      <Text style={styles.location}>Hiramandalam</Text>

      <Text style={styles.subtitle}>
        Smart School Management System
      </Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Welcome to Sun School
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logo: {
    width: 170,
    height: 170,
    marginBottom: 20,
    borderRadius: 70,
  },

  schoolName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  location: {
    fontSize: 20,
    marginTop: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "gray",
    marginTop: 10,
    marginBottom: 30,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
  width: "100%",
  backgroundColor: "#2563EB",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
  elevation: 4,
},

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  footerText: {
    marginTop: 20,
    color: "gray",
  },
});