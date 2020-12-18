import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostListScreen from "../screens/PostListScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../context/AppProvider";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";

const PostStack = createStackNavigator();
const AuthStack = createStackNavigator();

export function PostNavigation() {
  const { like, isLogin } = React.useContext(AppContext);
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
                onPress={like}
                color="red"
              />
            ),
          }}
        />
      </PostStack.Navigator>
    </NavigationContainer>
  );
}



export function AuthNavigation () {
  return (
    <AuthStack.Navigator>
        {isLogin ? (
          <AuthStack.Screen name="Profile" component={ProfileScreen} />
        ) : (
          <AuthStack.Screen name="Login" component={LoginScreen} />
        )}
      </AuthStack.Navigator>
  )
}

// export function ProfileNavigation () {
//   return()
// }


