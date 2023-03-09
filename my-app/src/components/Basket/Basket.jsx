import React from "react";
import { Link } from "react-router-dom";
import product1 from './img/product1.png'; 
import product2 from './img/product2.png'; 
import product3 from './img/product3.png'; 

import buy from './img/basket_buy.png'; 
import cross from './img/basket_cross.png'; 

function Basket(){
    return(
        <div className="basket_container">
            <div className="basket">
                <div className="head_basket">
                    <div className="title">
                        <h1> Корзина </h1>
                            <hr />
                    </div>
                </div>

                <div className="products_basket">
                    <div className="product_basket">
                        <div className="img_basket_product">
                            <img src={product1} alt="" />
                        </div>
                        <div className="name_basket_product">
                            <p> Atomic Heart </p>
                        </div>
                        <div className="price_basket_product">
                            <p> 1 500 ₽</p>
                        </div>
                        <div className="buts_basket_product">
                            <Link to="/"> <img src={cross} alt="" /> </Link>
                            <Link to="/"> <img src={buy} alt="" /> </Link>
                        </div>
                    </div>

                    <div className="product_basket">
                        <div className="img_basket_product">
                            <img src={product2} alt="" />
                        </div>
                        <div className="name_basket_product">
                            <p> Atomic Heart </p>
                        </div>
                        <div className="price_basket_product">
                            <p> 1 500 ₽</p>
                        </div>
                        <div className="buts_basket_product">
                            <Link to="/"> <img src={cross} alt="" /> </Link>
                            <Link to="/"> <img src={buy} alt="" /> </Link>
                        </div>
                    </div>

                    <div className="product_basket">
                        <div className="img_basket_product">
                            <img src={product3} alt="" />
                        </div>
                        <div className="name_basket_product">
                            <p> Atomic Heart </p>
                        </div>
                        <div className="price_basket_product">
                            <p> 1 500 ₽</p>
                        </div>
                        <div className="buts_basket_product">
                            <Link to="/"> <img src={cross} alt="" /> </Link>
                            <Link to="/"> <img src={buy} alt="" /> </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Basket;

