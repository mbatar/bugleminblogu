import React from "react";
import { View, Text } from "react-native";
export default function Post({ item }) {
  return (
    <View
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#DDD",
        backgroundColor: "red",
      }}
    >
      <Text style={{ marginBottom: 5, color: "#000" }}>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );
}
