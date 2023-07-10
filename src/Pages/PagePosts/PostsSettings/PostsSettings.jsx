import React from 'react';
import PostsSettingsSort from "./PostsSettingsSort/PostsSettingsSort";

const PostsSettings = ({setIsModalVisible, selectDefault, selectSettings, selectedSort, setSelectedSort}) => {
    return (
        <div>
            <PostsSettingsSort
                defaultValue={selectDefault}
                arrSelectSettings={selectSettings}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
            />
            <button onClick={()=> setIsModalVisible(true)} type="button" className="btn btn-outline-primary btn-lg">Создать пост</button>
        </div>
    );
};

export default PostsSettings;