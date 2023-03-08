import React from "react";
import logo from './img/logo_header.png'; 

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p> H*ucked <br /> Format </p>
            </div>  
            <div className="nav_menu_header">
                <a href="#"> .Главная </a>
                <a href="#"> "О нас" </a>
                <a href="#"> "Каталог" </a>
                <a href="#"> .Корзина </a>
            </div>
            <div className="buts">
                <div className="but_auth">
                    <p> Войти </p>
                </div>
                <div className="but_registr">
                    <p> Регистрация </p>
                </div>
            </div>

        </header>
    );
}

export default Header;