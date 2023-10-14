import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
interface ListProps {
  navigation: NavigationProp<any, any>;
}
const List = ({ navigation }: ListProps) => {
  return (
    <View>
      <Text>List</Text>
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
