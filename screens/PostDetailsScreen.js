import React from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppContext } from "../context/AppProvider";

const { width } = Dimensions.get("window");

export default function PostDetailsScreen({ route }) {
  const [post, setPost] = React.useState();
  const [imageUrl, setImageUrl] = React.useState("");
  const [isRead, setIsRead] = React.useState(false);
  const { handleActivePost } = React.useContext(AppContext);

  const { read } = React.useContext(AppContext);

  React.useEffect(() => {
    setPost(route.params.post);
    setImageUrl(route.params.photoUrl);
    handleActivePost(route.params.post.id);
  }, []);

  const scrollPosition = (event) => {
    console.log(event.nativeEvent.contentOffset.y);
    if (event.nativeEvent.contentOffset.y > 150 && !isRead) {
      read().then(() => setIsRead(true));
    }
  };

  return (
    <ScrollView onScroll={scrollPosition} scrollEventThrottle={500}>
      <Image
        style={{ width: width, height: width - 100 }}
        source={{ uri: imageUrl }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
          {post?.title}
        </Text>
        <Text style={{ fontSize: 16 }}>{post?.content}</Text>
      </View>
    </ScrollView>
  );
}
