import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import {useActions} from "../../hooks/useActions";
import PostsList from "../PostsList/PostsList";
import {useSelector} from "react-redux";
import Paginator from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import ModalAddPost from "../ModalAddPost/ModalAddPost";
import PostFilter from "../PostFilter/PostFilter";
import {usePosts} from "../../hooks/usePosts";
import cl from './Posts.module.css'

const Posts = () => {
    const {
        totalCount,
        posts,
        isPostsLoading,
        currentPage,
        limit
    } = useSelector(state => state.posts)
    const {getPosts, setPosts} = useActions()
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const remove = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    useEffect(() =>
            getPosts(limit, currentPage),
        [currentPage, limit])

    return <>
        <div>
            <div className={cl.button_group}>
                <div className={cl.update_posts}>
                    <Button
                        onClick={() => getPosts()}
                        type="primary"
                        disabled={isPostsLoading}
                        size={'large'}>
                        Загрузить посты
                    </Button>
                </div>
                <div className={cl.modal_add_post}>
                    <ModalAddPost posts={posts}/>
                </div>
            </div>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            <div>
                {isPostsLoading ?
                    <Loader/> :
                    <PostsList
                        title={'Какие-то посты'}
                        posts={sortedAndSearchedPosts}
                        remove={remove}/>
                }
            </div>
            <div className={cl.pagination}>
                <Paginator
                    getPosts={getPosts}
                    totalCount={totalCount}
                    currentPage={currentPage}
                    isPostLoading={isPostsLoading}/>
            </div>
        </div>

    </>
};

export default Posts;