import React from 'react';
import {useSelector} from "react-redux";
import {Route, Routes, Navigate } from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router";
import Loader from "../Loader/Loader";

const AppRouter = () => {
   const {isLoading, isAuth} = useSelector(state => state.auth)
    if (isLoading) {
        return <Loader/>
    }
    console.log(isLoading)
    //тут перенести в app
    // сбросить current page при logout
    return (
        isAuth ?
            <Routes>
           {privateRoutes.map(route =>
            <Route
                element={route.element}
                path={route.path}
                key={route.path}
            />
           )}
           <Route path="*" element={<Navigate replace to="/posts" />} />
       </Routes>
        :
    <Routes>
        {publicRoutes.map(route =>
            <Route
                element={route.element}
                path={route.path}
                key={route.path}
            />
        )}
        <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
    );
};

export default AppRouter;