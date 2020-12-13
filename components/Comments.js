import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Comments({ comments }) {
  const [showComments, setShowComments] = React.useState(false);
  const toggleShowComments = () => {
    setShowComments((v) => !v);
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text
        onPress={toggleShowComments}
        style={{ fontWeight: "bold", fontSize: 13, marginBottom: 5 }}
      >
        Yorumlar ({comments.length}) {showComments ? "" : "..."}
      </Text>
      {showComments
        ? comments.map((comment) => (
            <View
              key={comment.id}
              style={{
                paddingLeft: 5,
                flexDirection: "row",
                flexWrap: "wrap",
                marginBottom: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                {comment.name}
              </Text>
              <Text style={{ fontSize: 13 }}>{comment.comment}</Text>
            </View>
          ))
        : null}
    </View>
  );
}
