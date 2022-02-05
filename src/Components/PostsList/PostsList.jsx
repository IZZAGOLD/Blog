import React from 'react';
import PostItem from "../PostItem/PostItem";
import cl from './PostList.module.css'
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostsList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div className={cl.wrapper}>
            <h1 className={cl.title}>{title}</h1>
            <TransitionGroup className={cl.content}>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <PostItem index={index + 1} post={post} remove={remove}/>
                    </CSSTransition>)}
            </TransitionGroup>
        </div>
    );
};

export default PostsList;