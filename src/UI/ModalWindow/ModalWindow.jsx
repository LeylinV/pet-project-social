import React from 'react';
import styles from './ModalWindow.module.scss'

const ModalWindow = ({children, isVisible, setIsVisible}) => {
    return (
        <div className={isVisible ? styles.modalWindow : styles.hidden} onClick={() => setIsVisible(false)}>
            <div className={styles.modalWindow__inner} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;