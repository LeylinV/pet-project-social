import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PageSinglePost.module.scss'
import CommentsForPost from './CommentsForPost/CommentsForPost';

const PageSinglePost = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [isLoadingPost, setIsLoadingPost] = useState(true)
    const [comments, setComments] = useState([])
    const [isLoadingComments, setIsLoadingComments] = useState(true)
    useEffect(()=>{
        setIsLoadingPost(true)
        setIsLoadingComments(true)

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=> {
                setPost(res.data)
                setIsLoadingPost(false)

                return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${res.data.id}`)
            })
            .then(res=>{
                setComments(res.data)
                setIsLoadingComments(false)
            })
            .catch(()=>{
                setIsLoadingPost(false)
                setIsLoadingComments(false)
                setPost(
                    {
                        title:'Пост не найден!',
                        body: 'Скорее всего, вы открыли пост, который создали сами и он не был найден по запросу',
                        id: id
                    })
            })
    },[id])
    return (
        <div className='container mt-3'>
            <div>
                {isLoadingPost
                    ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)
                    :   <div>
                            <div>
                                <div className='text-center'>
                                    <h3 className={styles.mainTitle}>Пост с ID={post.id}</h3>
                                    <h3 className={styles.secondTitle}>{post.title}</h3>
                                </div>
                                <div className={styles.postBody}>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                            <CommentsForPost comments={comments} isLoadingComments={isLoadingComments} />
                        </div>}
            </div>
        </div>
    );
};

export default PageSinglePost;