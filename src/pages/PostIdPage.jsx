import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../api/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdpage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    console.log(params);
    return (
        <div>
            <h1>Page id post {params.id}</h1>
            {isLoading ? <Loader /> : <div>{post.id} {post.title}</div>}
            <h1>Comments</h1>
            {isComLoading ? <Loader /> : (
                <div>{comments?.map((comment) => {
                    return (
                        <div style={{marginTop: '15px'}} key={comment.id}>
                            <h5>{comment.email}</h5>
                            <h5>{comment.body}</h5>
                        </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PostIdpage
