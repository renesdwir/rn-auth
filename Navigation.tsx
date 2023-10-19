import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Feed from "./app/screens/Feed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./app/screens/List";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "./app/screens/Detail";
import { Ionicons } from "@expo/vector-icons";
import Settings from "./app/screens/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "./app/screens/Notifications";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Following from "./app/screens/Following";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTabs = createMaterialTopTabNavigator();
enum ValidIconNames {
  Home = "home",
  HomeOutline = "home-outline",
  Settings = "settings",
  SettingSharp = "ios-settings-sharp",
}

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1f2",
        },
      }}
    >
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="following" component={Following} />
      <TopTabs.Screen name="👀" component={Following} />
    </TopTabs.Navigator>
  );
}

function DrawerGroup() {
  const nav = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        drawerStyle: {},
        drawerStatusBarAnimation: "slide",
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TopTabsGroup}
        options={{
          drawerPosition: "right",
          headerLeft: () => false,
          headerRight: () => (
            <Pressable
              onPress={() => {
                nav.dispatch(DrawerActions.openDrawer());
              }}
            >
              <Text>PRESS ME</Text>
            </Pressable>
          ),
        }}
      />
      <Drawer.Screen name="Notification" component={Notifications} />
    </Drawer.Navigator>
  );
}
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          tabBarIcon: ({ color, focused, size }) => {
            let iconName: ValidIconNames = ValidIconNames.Home;
            if (route.name === "Home")
              iconName = focused ? ValidIconNames.Home : ValidIconNames.HomeOutline;
            else if (route.name === "Settings")
              iconName = focused ? ValidIconNames.Settings : ValidIconNames.SettingSharp;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "pink",
        };
      }}
    >
      <Tab.Screen
        name="Homes"
        component={DrawerGroup}
        options={{ tabBarLabel: "Test", headerShown: false }}
      />
      <Tab.Screen name="Settings" component={Settings} />
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
      <Stack.Screen
        name="List"
        component={List}
        options={{ presentation: "modal" }}
      ></Stack.Screen>
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
