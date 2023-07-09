import React, { useEffect, useState } from 'react';
import styles from './PagePosts.module.scss'
import PostsList from './PostsList/PostsList';
import PostsSettings from "./PostsSettings/PostsSettings";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import PostAdder from "./PostAdder/PostAdder";

const PagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false)

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
    const addPost = (post) => {
        setPosts([post,...posts])
        setIsModalVisible(false)
    }

    return (
        <div className='container mt-3'>
            <ModalWindow isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <PostAdder addPost={addPost}/>
            </ModalWindow>
            <PostsSettings setIsModalVisible={setIsModalVisible}/>
            <PostsList posts={posts} isLoading ={isLoading} deletePost={deletePost}/>
        </div>
    );
};

export default PagePosts;