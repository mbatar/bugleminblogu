import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { AppContext } from "../context/AppProvider";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = React.useContext(AppContext);
  const handleSignIn = () => {
    login({ email: email, password: password });
  };
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Giriş Yap
      </Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
          marginBottom: 10,
        }}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Şifre"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{
          borderWidth: 1,
          borderRadius: 4,
          padding: 10,
          marginBottom: 10,
        }}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#2C93DB",
          padding: 10,
          borderRadius: 4,
          marginBottom: 10,
        }}
        onPress={() => handleSignIn()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Giriş Yap
        </Text>
      </TouchableOpacity>
    </View>
  );
}
