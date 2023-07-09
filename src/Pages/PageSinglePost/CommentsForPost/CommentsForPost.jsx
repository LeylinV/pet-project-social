import React from 'react';
import styles from './CommentsForPost.module.scss'
import SingleComment from './SingleComment/SingleComment';

const CommentsForPost = ({comments, isLoadingComments}) => {
    return (
        <div>
            <div className="text-left">
                <h3 className={styles.mainTitle}>Комментарии:</h3>
            </div>
            {isLoadingComments
            ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            : (comments.length > 0 
                ?
                (comments.map((comment, index)=>{
                return <SingleComment comment={comment} commentCounter={index+1} key={comment.id} />
                }))
                : <div className="text-center">
                    Здесь нет комментариев!
                </div>
                )
        }
        </div>
    );
};

export default CommentsForPost;