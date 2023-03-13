import React from "react";
import avatar from './img/profil_avatar.png'; 

function Profil(){
    return(
        <div className="container_profil">
            <div className="content_profil">
                <div className="avatar_profil">
                    <img src={avatar} alt="" />
                </div>

                <form className="forms_profil">
                    <div className="input_profil">
                        <p> Фамилия: </p>
                        <input type="text" placeholder="Введите фаимилию" value="Грибоедов"/>
                    </div>

                    <div className="input_profil">
                        <p> Имя: </p>
                        <input type="text" placeholder="Введите фимя" value="Александр"/>
                    </div>

                    <div className="input_profil">
                        <p> Отчество: </p>
                        <input type="text" placeholder="Введите отчество" value="Сергеевич"/>
                    </div>
                    
                    <div className="input_profil">
                        <p> Адрес: </p>
                        <input type="text" placeholder="Введите адрес" value="Бари Галеева 3-а"/>
                    </div>

                    <div className="input_profil">
                        <p> Телефон: </p>
                        <input type="text" placeholder="Введите телефон" value="+7 (843) 203-55-55"/>
                    </div>

                    <div className="but_profil">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profil;