import React, {useEffect, useMemo, useState} from 'react';
import styles from './PagePosts.module.scss'
import PostsList from './PostsList/PostsList';
import PostsSettings from "./PostsSettings/PostsSettings";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import PostAdder from "./PostAdder/PostAdder";

const PagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [selectDefault, setSelectDefault] = useState('Выберите тип сортировки')
    const [selectedSort, setSelectedSort] = useState('')
    const [selectSettings, setSelectSettings] = useState([
        {value: 'title', title: 'По названию'},
        {value: 'body', title: 'По содержимому'},
        {value: 'id', title: 'По дате создания'}
    ])

    const [sortedPosts, setSortedPosts] = useState([]);

    useMemo(()=>{
        if (!selectedSort){
            setSortedPosts([...posts])
        }else{
            setSortedPosts([...posts].sort((post1, post2)=>{
                if (selectedSort === 'id'){
                    return post1[selectedSort] - post2[selectedSort]
                }
                return post1[selectedSort].localeCompare(post2[selectedSort])
            }))
        }
    }, [posts, selectedSort])

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
            <PostsSettings
                setIsModalVisible={setIsModalVisible}
                selectDefault={selectDefault}
                selectSettings={selectSettings}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
            />
            <PostsList posts={sortedPosts} isLoading ={isLoading} deletePost={deletePost}/>
        </div>
    );
};

export default PagePosts;