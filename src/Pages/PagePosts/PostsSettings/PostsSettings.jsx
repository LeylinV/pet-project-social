import React from 'react';

const PostsSettings = ({setIsModalVisible}) => {
    return (
        <div>
            <button onClick={()=> setIsModalVisible(true)} type="button" className="btn btn-outline-primary btn-lg">Создать пост</button>
        </div>
    );
};

export default PostsSettings;