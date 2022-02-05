import React, {useState} from 'react';
import {useSelector} from "react-redux"
import { Form, Input, Button } from 'antd';
import cl from './Login.module.css';
import {useActions} from "../../hooks/useActions";
import login_mem from '../../assets/img/login_mem.jpg'
const Login = () => {
    const {login} = useActions()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {isLoading} = useSelector(state => state.auth)
    console.log(isLoading)
    const submit = () => {
        login(username)
    }

    const onFinishFailed = (e) => {
        alert('Что-то пошло не так')
    }

    return (
        <div className={cl.wrapper}>
        <div className={cl.sign_in}>
            <Form
                  name="basic"
                  labelCol={{
                      span: 12,
                  }}
                  wrapperCol={{
                      span: 12,
                  }}
                  onFinish={submit}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
            >
                <Form.Item
                    label="Логин"
                    required tooltip={<img src={login_mem} style={{width: '100%', height: '100%'}} alt="Тут мем"/>}
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин!',
                        },
                    ]}
                >
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль!',
                        },
                    ]}
                >
                    <Input.Password
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 12,
                        span: 16,
                    }}

                >
                    {isLoading ?
                        <Button type="primary" loading>
                            Загрузка...
                        </Button>
                    :
                        <Button type="primary" htmlType="submit" >
                            Войти
                        </Button>
                    }
                </Form.Item>
            </Form>
        </div>
            <div className={cl.description}>
                <p>
                    Это тестовая форма авторизации. <br/> Введите любые данные, сохраним их&nbsp;в&nbsp;LocalStorage и&nbsp;авторизуем вас. Enjoy :)
                </p>
            </div>
        </div>

    );
};

export default Login;