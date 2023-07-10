import React from 'react';
import PostsSettingsSort from "./PostsSettingsSort/PostsSettingsSort";

const PostsSettings = ({setIsModalVisible, selectDefault, selectSettings, selectedSort, setSelectedSort}) => {
    return (
        <div>
            <input
                className="form-control form-control-lg mb-3"
                type="text"
                placeholder="Поиск.."
                aria-label=".form-control-lg example"
            />
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