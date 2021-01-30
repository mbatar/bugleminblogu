import React from "react";
import firebase from "../config/firebase";
import { convertToArray } from "../utils/index.js";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [posts, setPosts] = React.useState([]);
  const [activePost, setActivePost] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [authScreenTitle, setAuthScreenTitle] = React.useState("Profil");

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

  const handleChangeAuthTitle = (title) => {
    setAuthScreenTitle(title);
  };
  const login = async (user) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        firebase
          .database()
          .ref(`/users/${auth.user.uid}`)
          .once("value", (snap) => {
            setUser(snap.val());
          });
        return true;
      })
      .catch(() => {
        return false;
      });
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
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
  const handleActivePost = (id) => {
    setActivePost(id);
  };
  const like = () => {
    let { likes } = posts.filter((post) => post.id == activePost)[0];
    firebase
      .database()
      .ref(`posts/${activePost}`)
      .update({ likes: likes + 1 });
  };
  const read = async () => {
    let { reads } = posts.filter((post) => post.id == activePost)[0];
    await firebase
      .database()
      .ref(`posts/${activePost}`)
      .update({ reads: reads + 1 })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };

  return (
    <AppContext.Provider
      value={{
        posts: posts,
        handleActivePost,
        like,
        read,
        user: user,
        login,
        logout,
        authScreenTitle,
        handleChangeAuthTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
