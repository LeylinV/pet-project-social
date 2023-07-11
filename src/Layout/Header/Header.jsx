import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className={`${styles.leftLogo}`}>
                        <Link to='/'>Social</Link>
                    </div>
                    <div className={`${styles.rightSide}`}>
                        <Link to='/posts'>Посты</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;