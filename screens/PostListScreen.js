import React from "react";
import { View, FlatList } from "react-native";
import Post from "../components/Post";
import { AppContext } from "../context/AppProvider";

export default function PostListScreen({ navigation }) {
  const { posts } = React.useContext(AppContext);
  return (
    <View>
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <Post item={item} navigation={navigation} />}          
        />
      )}
    </View>
  );
}
