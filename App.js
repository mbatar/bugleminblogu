import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { AppProvider } from "./context/AppProvider.js";
import {PostNavigation} from "./navigation/index.js";

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <PostNavigation />
      </View>
      <StatusBar style="auto" />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#edced5'
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
  },
});
