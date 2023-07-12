import React from 'react';
import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <div className='container mt-3'>
            <h1 className={styles.mainTitle}>Добро пожаловать на главную страницу проекта Social!</h1>
            <h5 className={styles.smallTitle}><a href='https://github.com/LeylinV/pet-project-social'>pet-project-social</a></h5>
            <p>Мой проект, названный Social, был создан для демонстрации моих навыков в разработке на React. Я работал над ним самостоятельно и использовал различные технологии, такие как axios, bootstrap, react-router-dom, react-transition-group, redux и SCSS. Функционал проекта представляет собой одностраничное приложение (SPA), которое загружает посты с использованием API.</p>
            <p>В проекте реализованы функции создания, удаления и открытия постов. Также вы можете осуществлять поиск и выбирать различные методы сортировки. Посты подгружаются динамически, рализована бесконечная лента. Все посты открываются и загружаются комментарии к ним.</p>
            <p>В будущем я планирую добавить возможность открытия профилей пользователей, авторизацию, а также редактирование профилей и другие интересные возможности.</p>
            <p>Проект доступен на GitHub под названием pet-project-social. Вы можете ознакомиться с его исходным кодом и внести свои предложения и улучшения.</p>
            <p>Я надеюсь, что мой проект Social понравится вам и будет полезен для демонстрации моих навыков в разработке на React. Спасибо за внимание и приятного пользования!</p>
            <h3 className={styles.smallTitle}>Вы также можете ознакомиться с моими другими проектами</h3>
            <ul className={styles.list}>
                <li><strong>TradeMasterApp</strong> (<a href="https://gitlab.com/TradeMaster/tm-app.git">https://gitlab.com/TradeMaster/tm-app.git</a>) – Проект в U4ET.RU. В проекте реализована авторизация. Запросы на отображения товаров определенного пользователя. Корзина, проведение оплаты и создание чеков. Большой функционал, написанный на Svelte с использованием Svelte-routing. Закрытый репозиторий, с функционалом можно ознакомиться: https://app.trademaster.pro. Логин и пароль: demoweb, demo</li>
                <li><strong>Social</strong> (<a href="https://github.com/LeylinV/pet-project-social">https://github.com/LeylinV/pet-project-social</a>) – Проект на React. Внутри используется React-router-dom, Axios, SCSS/SASS и др. Делаются запросы на сервер. Используются реактивные компоненты и навигация. Проект использовался как проверка собственных сил и знаний React</li>
                <li><strong>react-todo </strong>(<a href="https://github.com/LeylinV/react-todo">https://github.com/LeylinV/react-todo</a>) – todo лист написанный на React. Используется Реактивность и навигация</li>
                <li><strong>vue-posts</strong> (<a href="https://github.com/LeylinV/vue-posts">https://github.com/LeylinV/vue-posts</a>) – Проект на Vue. Многостраниченое приложение с постами на Vue 3. Используется Vue Router, Vuex, Axios, Vue Transition. Создан свой UI кит, хуки, работа со store и другое.</li>
                <li><strong>Travelling</strong> (<a href="https://github.com/LeylinV/travelling">https://github.com/LeylinV/travelling</a>) – Блочная, кроссбраузерная, адаптивная верстка для мобильных устройств. Использовался JS (ES6) для различного функционала</li>
            </ul>
        </div>
    );
};

export default MainPage;