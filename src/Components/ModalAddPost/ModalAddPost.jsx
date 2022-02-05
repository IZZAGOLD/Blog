import React, { useState} from 'react';
import {Button, Input, Modal} from "antd";
import {useActions} from "../../hooks/useActions";
import cl from './ModalAddPost.module.css'

const ModalAddPost = ({posts}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [post, setPost] = useState({title: '', body: ''})
    const {setPosts} = useActions()
    const btnActive = !(post.title || post.body)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk =  () => {
        const newPost = {
             ...post, id: Date.now()
        }
        setPosts([...posts, newPost])
        setPost({title: '', body: ''})
        setIsModalVisible(false);

    };

    const handleCancel = () => {
        setPost({title: '', body: ''})
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button
                size={'large'}
                type="primary"
                onClick={showModal}>
                Добавить пост
            </Button>
            <Modal title="Добавить пост"
                   okButtonProps={{disabled: btnActive}}
                   okText={'Ок'}
                   cancelText={'Отмена'}
                   visible={isModalVisible}
                   onOk={handleOk}
                   onCancel={handleCancel}>
                <Input
                    className={cl.input}
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    placeholder="Заголовок" />
                <Input
                    className={cl.input}
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder="Описание" />
            </Modal>
        </div>
    );
};

export default ModalAddPost;