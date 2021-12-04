import React from 'react'
import '../styles/App.css'
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton'

const PostItem = ({post, number, remove}) => {

  const router = useNavigate()

  console.log(router);
    return (
        <div className="post">
          <div className="post__content">
            <strong>{number} {post.title}</strong>
            <div>{post.body}</div>
          </div>
          <div className="post__btns">
            <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
        </div>
    )
}

export default PostItem
