import React from "react";
import logo from './img/logo_footer.png'; 
import icon_inst from './img/icon_inst.png'; 
import icon_tel from './img/icon_tel.png'; 
import icon_face from './img/icon_face.png'; 

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
            <div className="buts_footer">
                <a href="#"> <img src={icon_inst} alt="" /> </a>
                <a href="#"> <img src={icon_tel} alt="" /> </a>
                <a href="#"> <img src={icon_face} alt="" /> </a>
            </div>

        </footer>
    );
}

export default Footer;