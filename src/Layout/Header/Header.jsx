import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './Header.module.scss'
import {useAuth} from "../../hooks/useAuth";

const Header = () => {
    const {isAuth, logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = () =>{
        logout()
        navigate('/login', {replace: false})
    }

    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className={`${styles.leftLogo}`}>
                        <Link to='/'>Social</Link>
                    </div>
                    <div className={`${styles.rightSide}`}>
                        <Link to='/posts'>Посты</Link>
                        {isAuth
                            ?
                            <a style={{cursor: 'pointer'}} onClick={()=>handleLogout()}>Выход</a>
                            :
                            <Link to='/users/101'></Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;