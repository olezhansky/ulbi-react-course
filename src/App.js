import React, { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "vwefqw", body: "e" },
    { id: 2, title: "sadad", body: "w" },
    { id: 3, title: "qwewq", body: "q" },
  ]);

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => {
        return a[filter.sort].localeCompare(b[filter.sort]);
      });
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearhedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter setFilter={setFilter} filter={filter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearhedPosts}
        title="Posts list about JS"
      />
    </div>
  );
}

export default App;
