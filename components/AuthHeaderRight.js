import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function AuthHeaderRight() {
    const navigation = useNavigation();
  return (
    <Ionicons
      name="lock-open-outline"
      size={28}
      style={{ padding: 10 }}
      onPress={() => navigation.navigate("Auth")}
      color="black"
    />
  );
}
