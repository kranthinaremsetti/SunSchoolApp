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
import FeesScreen from "../screens/FeesScreen";
import TeacherHomeworkScreen from "../screens/TeacherHomeworkScreen";
import TeacherAnnouncementScreen from "../screens/TeacherAnnouncementScreen";
import TimetableScreen from "../screens/TimetableScreen";
import TeacherStudentsScreen from "../screens/TeacherStudentsScreen";
import AdminDashboard from "../screens/AdminDashboard";
import AdminStudentsScreen from "../screens/AdminStudentsScreen";
import AdminFeesScreen from "../screens/AdminFeesScreen";
import ResultsScreen from "../screens/ResultsScreen";
import LeaveRequestScreen from "../screens/LeaveRequestScreen";
import LeaveRequestsScreen from "../screens/LeaveRequestsScreen";
import AdminReportsScreen from "../screens/AdminReportsScreen";
import LeaveHistoryScreen from "../screens/LeaveHistoryScreen";
import TeacherResultsScreen from "../screens/TeacherResultsScreen";

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
      <Stack.Screen
        name="Fees"
        component={FeesScreen}
      />
      <Stack.Screen
        name="TeacherHomework"
        component={TeacherHomeworkScreen}
        options={{ title: "Post Homework" }}
      />

      <Stack.Screen
        name="TeacherAnnouncement"
        component={TeacherAnnouncementScreen}
        options={{ title: "Post Announcement" }}
      />
      <Stack.Screen
        name="Timetable"
        component={TimetableScreen}
      />
      <Stack.Screen
        name="TeacherStudents"
        component={TeacherStudentsScreen}
        options={{ title: "Students" }}
      />
      <Stack.Screen
        name="AdminDashboard"
        component={AdminDashboard}
      />
      <Stack.Screen
      name="AdminStudents"
      component={AdminStudentsScreen}
      options={{
        title: "Student Management",
      }}
    />
    <Stack.Screen
      name="AdminFees"
      component={AdminFeesScreen}
      options={{
        title: "Fee Management",
      }}
    />
    <Stack.Screen
      name="Results"
      component={ResultsScreen}
    />
    <Stack.Screen
      name="LeaveRequest"
      component={LeaveRequestScreen}
    />
    <Stack.Screen
      name="LeaveRequests"
      component={LeaveRequestsScreen}
    />
    <Stack.Screen
      name="AdminReports"
      component={AdminReportsScreen}
      options={{ title: "Reports" }}
    />
    <Stack.Screen
      name="LeaveHistory"
      component={LeaveHistoryScreen}
    />
    <Stack.Screen
      name="TeacherResults"
      component={TeacherResultsScreen}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}