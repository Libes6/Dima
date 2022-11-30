import React, {FC} from 'react';
import './Menu.css'
import gerb from '../assets/img.png'
import {Breadcrumb} from "antd";

const Menu:FC   = () => {
    return (
        <>
            <div className='Menu'>
                <div className="Menu__container">
                    <div className="Menu__img">
                        <img src={gerb} alt=""/>
                        <p>Госслужба</p>
                    </div>

                    <ul className="Menu__list">
                        <li>Новости</li>
                        <li>Вакансии</li>
                        <li>Аналитика</li>
                        <li>Резерв кадров</li>
                        <li>Профессиональное развитие</li>
                    </ul>
                </div>
                <div className='Menu'>
                    <div className="Menu__container">
                        <Breadcrumb>

                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu  ;
