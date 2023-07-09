import React from 'react';
import styles from './SingleComment.module.scss'

const SingleComment = ({comment, commentCounter}) => {
    return (
        <div className={styles.commentBlock}>
            <div className={`d-flex ${styles.commentTitle}`}>
                <div className={styles.commentAvatar}></div>
                <div className={styles.commentName}>{comment.name}</div>
            </div>
            <div className={styles.commentBody}>
                {comment.body}
                <div className={styles.commentEmail}>{comment.email}</div>
            </div>
        </div>
    );
};

export default SingleComment;