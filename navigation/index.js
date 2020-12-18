import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostListScreen from "../screens/PostListScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../context/AppProvider";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import AuthHeaderRight from "../components/AuthHeaderRight";
import CreatePostScreen from "../screens/CreatePostScreen";
import EditPostsScreen from "../screens/EditPostsScreen";

const PostStack = createStackNavigator();
const AuthStack = createStackNavigator();
const AdminTab = createBottomTabNavigator();

export function AdminTabNavigation() {
  return (
    <AdminTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            case "CreatePost":
              iconName = focused ? "add-circle" : "add-circle-outline";
              break;
            case "EditPosts":
              iconName = focused ? "create" : "create-outline";
              break;
            default:
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
      }}
    >
      <AdminTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profil" }}
      />
      <AdminTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{ tabBarLabel: "Post Oluştur" }}
      />
      <AdminTab.Screen
        name="EditPosts"
        component={EditPostsScreen}
        options={{ tabBarLabel: "Post Düzenle" }}
      />
    </AdminTab.Navigator>
  );
}

export function AuthNavigation() {
  const { isLogin, logout } = React.useContext(AppContext);
  return (
    <AuthStack.Navigator>
      {isLogin ? (
        <AuthStack.Screen
          name="Admin"
          component={AdminTabNavigation}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              height: 80,
            },
            headerBackTitleStyle: { fontWeight: "600" },
            headerBackTitle: "Geri",
            headerTintColor: "red",
            headerTitleStyle: { color: "#000" },
            headerTitle: "Profil",
            headerRight: () => (
              <Ionicons
                name="log-out-outline"
                size={28}
                style={{ padding: 10 }}
                onPress={logout}
                color="red"
              />
            ),
          }}
        />
      ) : (
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              height: 80,
            },
            headerBackTitleStyle: { fontWeight: "600" },
            headerBackTitle: "Geri",
            headerTintColor: "red",
            headerTitleStyle: { color: "#000" },
            headerTitle: "Giriş",
          }}
        />
      )}
    </AuthStack.Navigator>
  );
}

export function PostNavigation() {
  const { like } = React.useContext(AppContext);
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
            headerRight: () => <AuthHeaderRight />,
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
        <PostStack.Screen
          name="Auth"
          component={AuthNavigation}
          options={{
            headerShown: false,
          }}
        />
      </PostStack.Navigator>
    </NavigationContainer>
  );
}
