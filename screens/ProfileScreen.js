import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Avatar } from "react-native-elements";
import { AppContext } from "../context/AppProvider";
import firebase from "../config/firebase";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const [imageUrl, setImageUrl] = React.useState("");
  const [postCount, setPostCount] = React.useState(0);
  const [likeCount, setLikeCount] = React.useState(0);
  const [readCount, setReadCount] = React.useState(0);
  const { handleChangeAuthTitle, user, posts } = React.useContext(AppContext);
  React.useEffect(() => {
    setPostCount(posts.length);
    setLikeCount(posts.reduce((acc, post) => acc + post.likes, 0));
    setReadCount(posts.reduce((acc, post) => acc + post.reads, 0));
    handleChangeAuthTitle(user.name);
    const getImage = async () => {
      let url = await firebase
        .storage()
        .ref()
        .child(user.photo)
        .getDownloadURL();
      setImageUrl(url);
    };
    getImage();
  }, [user]);
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <Avatar
          rounded
          size="large"
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 3,
            borderColor: "red",
            height: 70,
            width: 70,
            borderRadius: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Post</Text>
          <Text style={{ fontWeight: "bold" }}>{postCount}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 3,
            borderColor: "red",
            height: 70,
            width: 70,
            borderRadius: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Beğeni</Text>
          <Text style={{ fontWeight: "bold" }}>{likeCount}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 3,
            borderColor: "red",
            height: 70,
            width: 70,
            borderRadius: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Okunma</Text>
          <Text style={{ fontWeight: "bold" }}>{readCount}</Text>
        </View>
      </View>
    </View>
  );
}
