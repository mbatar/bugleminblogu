import React from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function PostDetailsScreen({ route }) {
  const [post, setPost] = React.useState();
  const [imageUrl, setImageUrl] = React.useState("");
  React.useEffect(() => {
    setPost(route.params.post);
    setImageUrl(route.params.photoUrl);
  }, []);
  return (
    <ScrollView>
      <Image
        style={{ width: width, height: width - 100 }}
        source={{ uri: imageUrl }}
      />
      <View style={{padding:10}}>
      <Text style={{fontWeight:'bold',fontSize:18,marginBottom:10}}>{post?.title}</Text>
      <Text style={{fontSize:16}}>{post?.content}</Text>
      </View>
    </ScrollView>
  );
}
