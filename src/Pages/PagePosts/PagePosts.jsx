import React, { useEffect, useState } from 'react';
import styles from './PagePosts.module.scss'
import PostAdder from './PostAdder/PostAdder';
import PostsList from './PostsList/PostsList';

const PagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setIsLoading(false)
            })
    },[])
    
    const deletePost = (postId)=>{
        setPosts(posts.filter((post)=> post.id !== postId))
    }

    return (
        <div className='container mt-3'>
            <PostAdder />
            <PostsList posts={posts} isLoading ={isLoading} deletePost={deletePost}/>
        </div>
    );
};

export default PagePosts;