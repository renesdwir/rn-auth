import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
interface ListProps {
  navigation: NavigationProp<any, any>;
}
const Feed = ({ navigation }: ListProps) => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            nav.dispatch(DrawerActions.openDrawer());
          }}
        >
          <Text>PRESS ME</Text>
        </Pressable>
      ),
      headerLeft: false,
    });
  }, []);
  return (
    <View>
      <Text>Feed</Text>
      <Button
        title="Go to List"
        onPress={() => {
          navigation.navigate("List", { name: "renes" });
        }}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({});
