import React from 'react';
import styles from './LoginPage.module.scss'

const LoginPage = () => {
    return (
        <div className="container mt-3">
            <div className={styles.loginBlock}>
                <h3 className="mb-5">Логин</h3>
                <div className="form-floating mb-5">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Логин"/>
                    <label htmlFor="floatingInput">Логин</label>
                </div>
                <div className="form-floating mb-5">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Пароль"/>
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary btn-lg" type="button">Войти</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;