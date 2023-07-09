import React from 'react';
import styles from './PostsList.module.scss'
import SinglePost from './SinglePost/SinglePost';

const PostsList = ({posts, isLoading, deletePost}) => {
    return (
        <div>
            <div className='text-center'>
                <h3 className={`${styles.mainTitle}`}>Посты</h3>
            </div>
            <div>
                {isLoading
                    ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)
                    : (posts.map((post, index)=>{
                        return <SinglePost post={post} postNumber={index+1} deletePost={deletePost} key={index} />
                    }))}
            </div>
        </div>
    );
};

export default PostsList;