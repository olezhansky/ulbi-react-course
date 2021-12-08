import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import Posts from "../../pages/Posts";
import About from "../../pages/About";
import ErrorPage from "../../pages/ErrorPage";
import PostIdPage from "../../pages/PostIdPage";
import { publicRoutes, privateRoutes } from '../../router/index';
import Login from '../../pages/Login';
import { AuthContext } from '../../context/index';
import Loader from '../UI/Loader/Loader'

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isLoading, setIsLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth 
            ?
            <Routes>
                {privateRoutes.map((route) => 
                <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                />
                )}
                <Route path="*" element={<Posts />} />
            </Routes>
            : 
            <Routes>
            {publicRoutes.map((route) => 
                <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                />
                )}
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default AppRouter
