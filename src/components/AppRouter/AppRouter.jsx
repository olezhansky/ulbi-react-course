import React from 'react'
import { Route, Routes } from "react-router-dom";
import Posts from "../../pages/Posts";
import About from "../../pages/About";
import ErrorPage from "../../pages/ErrorPage";
import PostIdPage from "../../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />}></Route>
            <Route exact path="/posts" element={<Posts />}></Route>
            <Route exact path="/posts/:id" element={<PostIdPage />}></Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouter
