import React from "react";
import search from './img/search_but.png'; 
import product from './img/product.png'; 
import product1 from './img/product1.png'; 
import product2 from './img/product2.png'; 
import product3 from './img/product3.png'; 
import product4 from './img/product4.png'; 
import product5 from './img/product5.png'; 
import product6 from './img/product6.png'; 
import { Link } from "react-router-dom";

function Main(){
    return(
        <div className="main">
            <div className="catalog">
                <div className="head_catalog">
                    <div className="title">
                        <h1> Каталог </h1>
                            <hr />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Поиск..." />
                            <img src={search} alt="" />
                    </div>
                </div>
                <div className="products">
                    <div className="product">
                        <div className="img_description">
                            <img src={product} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img_description">
                            <img src={product1} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img_description">
                            <img src={product2} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img_description">
                            <img src={product3} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img_description">
                            <img src={product4} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img_description">
                            <img src={product5} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img_description">
                            <img src={product6} alt="" />
                            <div className="description">
                                <div className="text_description">
                                    <p> The Last of Us Part II  — компьютерная игра 
                                        в жанре приключенческого боевика с элементами 
                                        survival horror и стелс-экшена от третьего 
                                        лица, разработанная компанией Naughty Dog и 
                                        изданная Sony Interactive Entertainment в 
                                        2020 году для игровой приставки PlayStation 4. 
                                        Является прямым сюжетным продолжением игры 
                                        The Last of Us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="buts_price">
                            <div className="but_product">
                                <Link to="/product"> <p> Добавить + </p> </Link>
                            </div>
                            <div className="price">
                                <p> <strike> 1 500₽ </strike> 999 ₽ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="malling">
                <div className="head_malling">
                    <div className="title_malling">
                        <h1> Попишись на рассылку </h1>
                            <hr />
                    </div>
                </div>
                <div className="forms">
                    <div className="container_inputs">
                        <div className="input_form">
                            <p> Введи E-mail: </p>
                            <input type="text" placeholder="Введите E-mail"/>
                        </div>
                        <div className="acept">
                            <p> Я соглашаюсь с правилами расссылки </p>
                            <input type="checkbox" />
                        </div>
                        <div className="but_malling">
                            <input type="submit" value="Отправить" className="but_mail"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    );
}

export default Main;