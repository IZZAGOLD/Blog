import React from 'react';
import {Button} from 'antd';
import cl from './PostItem.module.css'
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className={cl.content}>
            <div>
                <strong>{props.index}. {props.post.title}</strong>
            </div>
            <div className={cl.body}>
                {props.post.body}
            </div>
            <div className={cl.buttons}>
                <div className={cl.button}>
                    <Button
                        onClick={() => navigate(`./${props.post.id}`)}
                        type="primary"
                        size={'small'}>
                        Открыть
                    </Button>
                </div>
                <div className={cl.button}>
                    <Button
                        onClick={() => props.remove(props.post)}
                        type="primary"
                        size={'small'}
                        danger>
                        Удалить
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default PostItem;