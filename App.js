import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppProvider } from "./context/AppProvider.js";
import PostListScreen from "./screens/PostListScreen.js";

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <PostListScreen />
      </SafeAreaView>
      <StatusBar style="auto" />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
  },
});
