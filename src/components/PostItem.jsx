import React from 'react'
import '../styles/App.css'
import MyButton from './UI/button/MyButton'

const PostItem = ({post, number, remove}) => {
    return (
        <div className="post">
          <div className="post__content">
            <strong>{number} {post.title}</strong>
            <div>{post.body}</div>
          </div>
          <div className="post__btns">
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
          </div>
        </div>
    )
}

export default PostItem
