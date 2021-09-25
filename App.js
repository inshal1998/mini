import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import StartScreen from "./src/screens/StartScreen";
import detailScreen from "./src/screens/detailScreen";
import normalCourseCard from "./src/components/normalCourseCard";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="normalCourseCard" component={normalCourseCard} />
        <Stack.Screen name="detailScreen" component={detailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
