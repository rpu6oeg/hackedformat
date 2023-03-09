import React from "react";
import logo from './img/logo_header.png'; 
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p> H*ucked <br /> Format </p>
            </div>  
            <div className="nav_menu_header">
                <Link to="/"> .Главная </Link>
                <Link to="#"> "О нас" </Link>
                <Link to="#"> "Каталог" </Link>
                <Link to="/basket"> .Корзина </Link>
            </div>
            <div className="buts">
                <div className="but_auth">
                   <Link to="/profil"> <p> Войти </p> </Link>
                </div>
                <div className="but_registr">
                    <p> Регистрация </p>
                </div>
            </div>

        </header>
    );
}

export default Header;