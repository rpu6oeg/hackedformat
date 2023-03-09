import React from "react";
import product1 from './img/product1.png'; 

function Product(){
    return(
        <div className="container_content">
            <div className="content_product">
                <div className="img_content_product">
                    <img src={product1} alt="" />
                </div>

                <div className="description_content_product">
                    <div className="description_content">
                        <p> История альтернативной реальности 1950-х годов 
                            берет свое начало с развития робототехники и передовых 
                            технологий во время Второй мировой войны. Игровой мир 
                            не так далек от идеалов, за которые сегодня борется 
                            человечество. Счастливое общество, верховенство науки, 
                            идеальные города с залитыми солнцем зелеными парками и 
                            скверами, автоматизация повседневной жизни и стремление 
                            дотянуться до звезд.
                            <br /><br />
                            Вам придется много драться. Выбирайте свою лучшую тактику 
                            для каждого уникального противника, используйте все, что 
                            «попадется под руку» — начиная с особых возможностей боевой
                            перчатки и заканчивая тяжелым оружием массового поражения.
                            </p>
                    </div>

                    <div className="buts_content_product">
                        <div className="but_buy">
                            <p> Купить </p>
                        </div>
                        <div className="price_content">
                            <p> <strike> 2 500 ₽ </strike> 1 500 ₽ </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;