import React from 'react';
import PostsSettingsSort from "./PostsSettingsSort/PostsSettingsSort";

const PostsSettings = (
    {
        setIsModalVisible,
        selectDefault,
        selectSettings,
        selectedSort,
        setSelectedSort,
        searchQuery,
        setSearchQuery
    }) => {
    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">🔍</span>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Поиск.."
                    aria-label=".form-control-lg example"
                    aria-describedby="basic-addon1"
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                />
            </div>
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