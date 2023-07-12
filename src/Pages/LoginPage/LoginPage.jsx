import React, {useEffect, useState} from 'react';
import styles from './LoginPage.module.scss'
import {useAuth} from "../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";
import {isLoginFormValid} from "../../utils/isLoginFormValid";

const LoginPage = () => {
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const [loginString, setLoginString] = useState('')
    const [passwordString, setPasswordString] = useState('')

    const [loginValid, setLoginValid] = useState()
    const [passwordValid, setPasswordValid] = useState()
    const {login} = useAuth()

    const tryAuth = () => {
        setLoginValid(loginString ? 'is-valid': 'is-invalid')
        setPasswordValid(passwordString.length > 8 ? 'is-valid': 'is-invalid')
    }
    useEffect(()=>{
        if(isLoginFormValid(loginValid, passwordValid)){
            login()
            navigate(fromPage, {replace: true})
        }
    }, [loginValid,passwordValid])

    return (
        <div className="container mt-3">
            <div className={styles.loginBlock}>
                <h3 className="mb-5">Логин</h3>
                <div className="form-floating mb-5">
                    <input
                        value={loginString}
                        onChange={(e)=>setLoginString(e.target.value)}
                        type="text"
                        className={`form-control ` + loginValid}
                        id="floatingInput"
                        placeholder="Логин"
                    />
                    <label htmlFor="floatingInput">Логин</label>
                    <div className="invalid-feedback">
                        Введите логин
                    </div>
                </div>
                <div className="form-floating mb-5">
                    <input
                        value={passwordString}
                        onChange={(e)=>setPasswordString(e.target.value)}
                        type="password"
                        className={`form-control ` + passwordValid}
                        id="floatingPassword"
                        placeholder="Пароль"
                    />
                    <label htmlFor="floatingPassword">Пароль</label>
                    <div className="invalid-feedback">
                        Пароль должен быть длинной от 8 символов
                    </div>
                </div>
                <div onClick={tryAuth} className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary btn-lg" type="button">Войти</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;