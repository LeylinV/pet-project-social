import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className={`${styles.leftLogo}`}>
                        Social
                    </div>
                    <div className={`${styles.rightSide}`}>
                        Пусто
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;