import React, {useState} from 'react';
import styles from './LoginPage.module.scss'

const LoginPage = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [loginValid, setLoginValid] = useState()
    const [passwordValid, setPasswordValid] = useState()

    const tryAuth = () => {
        setLoginValid(login ? 'is-valid': 'is-invalid')
        setPasswordValid(password.length > 8 ? 'is-valid': 'is-invalid')
    }

    return (
        <div className="container mt-3">
            <div className={styles.loginBlock}>
                <h3 className="mb-5">Логин</h3>
                <div className="form-floating mb-5">
                    <input
                        value={login}
                        onChange={(e)=>setLogin(e.target.value)}
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
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
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