import React from 'react';
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <ul className="footer__menu">
                        <li className="footer__menuitem">
                            <Link to="/catalog">Каталог нерухомості</Link>
                        </li>
                        <li className="footer__menuitem">
                            <Link to="/contact">Контакти</Link>
                        </li>
                    </ul>
                    <div className="footer__message">
                        <span className="footer__text">Написати нам</span>
                        <a href="mailto:Gcgrandcapital@gmail.com" className="footer__messagelink">
                            <svg className="icon message-icon">
                                <use xlinkHref="#message-icon"></use>
                            </svg>
                        </a>
                        <a href="https://t.me/+380935026932" className="footer__messagelink">
                            <svg className="icon paper-plane-icon">
                                <use xlinkHref="#paper-plane-icon"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="footer__message">
                        <span className="footer__text">Соціальні мережі</span>
                        <a href="https://www.instagram.com/grandcapital_realty/?igshid=YmMyMTA2M2Y%3D" className="footer__messagelink">
                            <svg className="icon instagram">
                                <use xlinkHref="#instagram"></use>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/grandcapitalrealestate" className="footer__messagelink">
                            <svg className="icon facebook">
                                <use xlinkHref="#facebook"></use>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer__copyright">
                    © 2022 Grand Capital. Всі права захищені.
                </div>
            </div>
        </footer>
    );
};

export default Footer;