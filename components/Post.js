import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import firebase from "../config/firebase";
import Comments from "./Comments";

const { width } = Dimensions.get("window");

export default function Post({ item: { item }, navigation }) {
  const [imageUrl, setImageUrl] = React.useState("");
  React.useEffect(() => {
    const getImage = async () => {
      let url = await firebase.storage().ref().child(item.photo).getDownloadURL();
      setImageUrl(url);
    };
    getImage();
  }, []);
  return (
    <View>
      <View style={{ paddingHorizontal: 10, paddingVertical: 14 }}>
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Post", {
            post: item,
            photoUrl: imageUrl,
          })
        }
      >
        <Image
          style={{ width: width, height: width - 100 }}
          source={{ uri: imageUrl }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="heart-outline"
            size={28}
            style={{ paddingVertical: 10, paddingLeft: 10, paddingRight: 5 }}
            color="black"
          />
          <Text style={{ fontWeight: "bold" }}>{item.likes}</Text>
        </View>
        <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
          <Ionicons
            name="book-outline"
            size={28}
            style={{ paddingVertical: 10, paddingLeft: 5, paddingRight: 10 }}
            color="black"
          />
          <Text style={{ fontWeight: "bold", color: "black" }}>{item.reads}</Text>
        </View>
      </View>
      {item.comments.length ? <Comments comments={item.comments} /> : null}
    </View>
  );
}
