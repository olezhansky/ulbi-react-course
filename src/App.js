import React, { useState, useMemo, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./api/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearhedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter setFilter={setFilter} filter={filter} />
      {postError && <h1>Error is happened {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearhedPosts}
          title="Posts list about JS"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
