import React from 'react';

const PostsSettingsSort = ({defaultValue, arrSelectSettings, selectedSort, setSelectedSort}) => {
    const handleSelectSort = (e) =>{
        setSelectedSort(e.target.value)
    }
    return (
        <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            value={selectedSort}
            onChange={handleSelectSort}
        >
            <option disabled value=''>{defaultValue}</option>
            {arrSelectSettings.map(option =>
                <option
                    value={option.value}
                    key={option.value}
                >
                    {option.title}
                </option>
            )}
        </select>
    );
};

export default PostsSettingsSort;