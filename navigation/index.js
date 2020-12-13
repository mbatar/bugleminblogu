import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostListScreen from "../screens/PostListScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import { Ionicons } from "@expo/vector-icons";

const PostStack = createStackNavigator();

export default function PostNavigation() {
  return (
    <NavigationContainer theme={{ colors: { background: "#FFF" } }}>
      <PostStack.Navigator>
        <PostStack.Screen
          name="Postlist"
          component={PostListScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              height: 80,
            },
            headerTitle: "Gönderiler",
            headerRight: () => (
              <Ionicons
                name="lock-open-outline"
                size={28}
                style={{ padding: 10 }}
                onPress={() => console.log("asd")}
                color="black"
              />
            ),
          }}
        />
        <PostStack.Screen
          name="Post"
          component={PostDetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              height: 80,
            },
            headerBackTitleStyle: { fontWeight: "600" },
            headerBackTitle: "Geri",
            headerTintColor: "red",
            headerTitleStyle: { color: "#000" },
            headerTitle: "Gönderi",
            headerRight: () => (
                <Ionicons
                  name="heart"
                  size={28}
                  style={{ padding: 10 }}
                  onPress={() => console.log("asd")}
                  color="red"
                />
              ),
          }}
        />
      </PostStack.Navigator>
    </NavigationContainer>
  );
}
