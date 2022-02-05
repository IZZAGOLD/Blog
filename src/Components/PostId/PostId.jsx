import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import {useActions} from "../../hooks/useActions";
import cl from './PostId.module.css'

const PostId = () => {
    const params = useParams()
    const {getComments} = useActions()
    const {
        posts,
        isCommentsLoading,
        commentsForPost
    } = useSelector(state => state.posts)
    const [post, setPost] = useState([{id: ''}])

    const currentPost = (posts, params) => {
        console.log(params)
        return posts.filter(post => params.id == post.id)
    }

    useEffect(() => {
        setPost(currentPost(posts, params))
        getComments(params.id)
    }, [])

    return (
        <div className={cl.wrapper}>
            <h1>Пост с ID: {params.id}</h1>
            {isCommentsLoading ?
                <Loader/>
                :
                <div className={cl.title}>
                    <strong>{post[0].title}</strong>
                </div>
            }
            <h2>Комментарии</h2>
            {
                isCommentsLoading ?
                    <Loader/>
                    :
                    <div className={cl.comments}>
                        {commentsForPost.map(comm =>
                            <div className={cl.comment}
                                 key={comm.id}>
                                <h3>{comm.email}</h3>
                                <div>{comm.body}</div>
                            </div>)}
                    </div>
            }
        </div>
    );
};

export default PostId;