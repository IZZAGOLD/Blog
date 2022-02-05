import React from 'react';
import { Button } from 'antd';
import cl from './Navbar.module.css';
import { useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

const Navbar = () => {
    const { user, isLoading, isAuth} = useSelector(state =>  state.auth)
    const {logout, setCurrentPage, setLimit} = useActions()

    const onLogout = () => {
        logout()
        setCurrentPage(1)
        setLimit(10)
    }

    return (
        isAuth ?
        <nav className={cl.wrapper}>
            <div className={cl.username}>
                {user ?
                        <span>{user}</span>
                    :
                    null
                }
            </div>
                <Button
                    disabled={isLoading}
                    onClick={onLogout}
                    type="primary"
                    size={'large'}>
                    Выйти
                </Button>
        </nav>
            :
            null
    );
};

export default Navbar;