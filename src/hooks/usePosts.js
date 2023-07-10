import {useMemo} from "react";

export const useSortedPosts = (posts, selectedSort) => {
    const sortedPosts = useMemo(()=>{
        if (!selectedSort){
            return [...posts]
        }else{
            return [...posts].sort((post1, post2)=>{
                if (selectedSort === 'id'){
                    return post1[selectedSort] - post2[selectedSort]
                }
                return post1[selectedSort].localeCompare(post2[selectedSort])
            })
        }
    }, [posts, selectedSort])
    return sortedPosts
}

export const useSortedAndFilteredPosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndFilteredPosts = useMemo(()=>{
        if(!query){
            return [...sortedPosts]
        }else{
            return ([...posts].filter((post)=>{
                return (
                    post.title.includes(query)
                    ||
                    post.body.includes(query)
                )
            }))
        }
    },[sortedPosts, query])

    return sortedAndFilteredPosts
}