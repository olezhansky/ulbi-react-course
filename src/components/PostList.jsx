import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>Posts not found</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem key={post.id} number={post.id} post={post} remove={remove}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default PostList
