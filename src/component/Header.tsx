import React, {FC} from 'react';
import './Header.css'
const Header:FC = () => {
    return (
        <div className='header'>
            <div className="container__header">
                <div className="site">
                    Другие сайты государства
                </div>
                <div className="menu__header">
                    <ul className="menu__header-list">
                        <li>Обратная связь</li>
                        <li>Обратная связь</li>
                    </ul>
                    <div className="version">
                        Версия для слабовидящих
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
