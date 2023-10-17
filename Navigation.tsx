import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feed from "./app/screens/Feed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./app/screens/List";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "./app/screens/Detail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="Home2" component={Feed} />
    </Tab.Navigator>
  );
}
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        children={TabGroup}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="List" component={List}></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
