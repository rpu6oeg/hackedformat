import React from "react";
import logo from './img/logo_footer.png'; 

function Footer(){
    return(
        <footer className="footer">
            <div className="logo_footer">
                <img src={logo} alt="logo" />
                <p> H*ucked <br /> Format </p>
            </div>  
            <div className="nav_menu_footer">
                <a href="#"> .Главная </a>
                <a href="#"> "О нас" </a>
                <a href="#"> /Каталог" </a>
                <a href="#"> .Оферта </a>
            </div>
            <div className="buts">
                <div className="but_auth">
                    <p> Войти </p>
                </div>
                <div className="but_registr">
                    <p> Регистрация </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;