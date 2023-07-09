import React, {useState} from 'react';
import styles from './PostAdder.module.scss'

const PostAdder = ({addPost}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const createPost = () => {
        addPost({...post, id: Date.now()})
    }

    return (
        <div className={styles.adderForm}>
            <h2 className={styles.adderForm__title}>Добавление поста</h2>
            <div className={styles.adderForm__body}>
                <div className="mb-3">
                    <label htmlFor="formInputTitle" className="form-label">Название</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formInputTitle"
                        value={post.title}
                        onChange={e => setPost({...post, title: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formInputTextarea" className="form-label">Тело поста</label>
                    <textarea
                        className="form-control"
                        style={{resize:"none"}}
                        id="formInputTextarea"
                        rows="5"
                        value={post.body}
                        onChange={e => setPost({...post, body: e.target.value})}
                    ></textarea>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={createPost} className="btn btn-primary btn-lg" type="button">Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default PostAdder;