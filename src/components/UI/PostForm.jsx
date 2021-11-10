import React, { useState } from 'react'
import MyInput from './input/MyInput';
import MyButton from './button/MyButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: "",
        body: "",
      });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: "", body: "" });
    };
        
    return (
        <form>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Post titleee"
            />
            <MyInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Post descriptionnn"
            />
            <MyButton type="submit" onClick={addNewPost}>
                Create post
            </MyButton>
      </form>
    )
}

export default PostForm
