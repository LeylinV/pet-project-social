import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {Route} from "react-router-dom";

const PrivateRoute = ({ children, ...params}) => {
    const location = useLocation();
    const {isAuth} = useAuth()

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