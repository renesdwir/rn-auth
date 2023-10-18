import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
interface ListProps {
  navigation: NavigationProp<any, any>;
}

interface Params {
  name?: string;
}
const List = ({ navigation }: ListProps) => {
  const nav = useNavigation();
  const route = useRoute();
  const params = route.params as Params;
  console.log(params);
  useLayoutEffect(() => {
    nav.setOptions({
      headerTitle: "Change Header Title",
    });
  }, []);
  return (
    <View>
      <Text>List</Text>
      <Text>{params.name}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          FIREBASE_AUTH.signOut();
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
