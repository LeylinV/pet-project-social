import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {Route} from "react-router-dom";
import Loader from "../UI/Loader/Loader";

const PrivateRoute = ({ children, ...params}) => {
    const location = useLocation();
    const {isAuth, isLoading} = useAuth()

    if (isLoading){
        return <Loader />
    }

    if (!isAuth){
        return <Navigate
            to="/login"
            state={{from: location}}
            replace
        />
    }

    return children
};

export default PrivateRoute;