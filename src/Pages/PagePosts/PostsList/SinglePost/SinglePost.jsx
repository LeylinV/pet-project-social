import React from 'react';
import styles from './SinglePost.module.scss'
import { useNavigate } from 'react-router-dom';

const SinglePost = ({post, postNumber, deletePost}) => {
    const navigate = useNavigate()
    const deleteButtonHandler = (postId)=>{
        deletePost(postId)
    }
    const openPost = (postId)=>{
        navigate(`/posts/${postId}`)
    }

    return (
        <div className={styles.post}>
            <div className={styles.postTitle}>{postNumber}. {post.title}</div>
                <div className="row">
                    <div className='col-md-12 col-lg-10'>
                        <div className={styles.postBody}>
                            {post.body}
                        </div>
                    </div>
                    <div className='col-md-12 col-lg-2 row'>
                        <div className='col-6 col-lg-12' ><button type="button" className='btn btn-block btn-primary' onClick={(e)=>{openPost(post.id)}}>Открыть</button></div>
                        <div className='col-6 col-lg-12' ><button type="button" className='btn btn-block btn-danger' onClick={(e)=>{deleteButtonHandler(post.id)}}>Удалить</button></div>
                    </div>
                </div>
            <div className={styles.postId}>ID: {post.id}</div>
        </div>
    );
};

export default SinglePost;