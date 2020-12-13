import React from "react";
import firebase from "../config/firebase";
import { convertToArray } from "../utils/index.js";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const getPosts = () => {
      firebase
        .database()
        .ref("/posts")
        .on("value", (snapshot) => {
          setPosts(convertToArray(snapshot.val()));
        });
    };
    getPosts();
  }, []);

  const createPost = (post) => {
    firebase
      .database()
      .ref("posts")
      .push(post)
      .then(() => console.log("Post created: ", post));
  };
  const deletePost = (id) => {
    firebase
      .database()
      .ref("posts")
      .remove(id)
      .then(() => console.log("deleted"));
  };

  return (
    <AppContext.Provider value={{ posts: posts }}>
      {children}
    </AppContext.Provider>
  );
}
