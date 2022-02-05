import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import './styles/App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter/AppRouter";
import {useActions} from "./hooks/useActions";

const App = () => {
    const {setIsAuth} = useActions()
    useEffect(() => {
      if (localStorage.getItem('auth')){
          setIsAuth(true)
      }

    }, [])
    return (
        <main className={'App'}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </main>
    );
};

export default App;