import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import ParentDashboard from "../screens/ParentDashboard";
import TeacherDashboard from "../screens/TeacherDashboard";
import AttendanceScreen from "../screens/AttendanceScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AnnouncementsScreen from "../screens/AnnouncementsScreen";
import HomeworkScreen from "../screens/HomeworkScreen";
import TeacherAttendanceScreen from "../screens/TeacherAttendanceScreen";
import NotificationScreen from "../screens/NotificationScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="ParentDashboard"
          component={ParentDashboard}
          options={{ title: "Parent Dashboard" }}
        />

        <Stack.Screen
          name="TeacherDashboard"
          component={TeacherDashboard}
          options={{ title: "Teacher Dashboard" }}
        />
        <Stack.Screen
        name="Attendance"
        component={AttendanceScreen}
        />

        <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        />

        <Stack.Screen
        name="Announcements"
        component={AnnouncementsScreen}
        />

        <Stack.Screen
        name="Homework"
        component={HomeworkScreen}
        />
        <Stack.Screen
        name="TeacherAttendance"
        component={TeacherAttendanceScreen}
        options={{ title: "Take Attendance" }}
        />
        <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}