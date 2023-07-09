import React from 'react';
import styles from './PostsList.module.scss'
import SinglePost from './SinglePost/SinglePost';
import Loader from "../../../UI/Loader";

const PostsList = ({posts, isLoading, deletePost}) => {
    return (
        <div>
            <div className='text-center'>
                <h3 className={styles.mainTitle}>Посты</h3>
            </div>
            <div>
                {isLoading
                    ?
                    <Loader />
                    :
                    (posts.length > 0)
                        ?
                        posts.map((post, index)=> <SinglePost post={post} postNumber={index+1} deletePost={deletePost} key={index} />)
                        :
                        <h4 className={styles.titleNoPosts}>Посты не найдены!</h4>
                }
            </div>
        </div>
    );
};

export default PostsList;