import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PageSinglePost.module.scss'
import CommentsForPost from './CommentsForPost/CommentsForPost';
import PostService from "../../API/PostService";
import {useFetching} from "../../hooks/useFetching";

const PageSinglePost = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoadingPost, postError] = useFetching(async () => {
        const response = await PostService.getById(id);
        setPost(response.data)
    })

    const [fetchCommentsById, isLoadingComments, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById()
    }, [id])
    useEffect(() => {
        fetchCommentsById()
    }, [post])


    return (
        <div className='container mt-3'>
            <div>
                {postError &&
                    <h1>Произошла ошибка. Скорее всего, вы открыли пост, который создали сами и он не был найден по запросу</h1>
                }
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
                                    <h3 className={styles.mainTitle}>Пост с ID={post?.id}</h3>
                                    <h3 className={styles.secondTitle}>{post?.title}</h3>
                                </div>
                                <div className={styles.postBody}>
                                    <p>{post?.body}</p>
                                </div>
                            </div>
                            <CommentsForPost comments={comments} isLoadingComments={isLoadingComments} />
                        </div>}
            </div>
        </div>
    );
};

export default PageSinglePost;