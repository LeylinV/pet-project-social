import React, {useEffect, useRef, useState} from 'react';
import PostsList from './PostsList/PostsList';
import PostsSettings from "./PostsSettings/PostsSettings";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import PostAdder from "./PostAdder/PostAdder";
import {useSortedAndFilteredPosts} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import {getPageCount} from "../../utils/getPageCount";
import PostService from "../../API/PostService";
import {useObserver} from "../../hooks/useObserver";

const PagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const [searchQuery, setSearchQuery] = useState('')
    const [selectDefault, setSelectDefault] = useState('Выберите тип сортировки')
    const [selectedSort, setSelectedSort] = useState('')
    const [selectSettings, setSelectSettings] = useState([
        {value: 'title', title: 'По названию'},
        {value: 'body', title: 'По содержимому'},
        {value: 'id', title: 'По дате создания'}
    ])
    const sortedAndFilteredPosts = useSortedAndFilteredPosts(posts, selectedSort, searchQuery)
    const lastElement = useRef()

    const [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])
    
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
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <PostsList posts={sortedAndFilteredPosts} isLoading ={isLoading} deletePost={deletePost}/>
            <div ref={lastElement}></div>
        </div>
    );
};

export default PagePosts;