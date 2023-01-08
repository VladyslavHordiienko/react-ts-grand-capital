import React from 'react';
import Logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import classNames from "classnames";

const Header:React.FC = () => {
    const [openMenu, setOpenMenu] = React.useState<boolean>(false)

    const onBurgerClick = () => {
        setOpenMenu(!openMenu)
        document.body.classList.toggle('active')
    }

    React.useEffect(() => {
        const mobileMenuClick = (e:MouseEvent) => {
            const logo = document.querySelector('.header__logoimg')
            const li = document.querySelectorAll('.header__menuitem')

            const composed = e.composedPath()
            const target = e.target as Element

            if(composed.includes(logo as Node) || target.classList.contains('header__menulink')){
                setOpenMenu(false)
                document.body.classList.remove('active')

            }
        }
        (document.documentElement.clientWidth<=768) && document.body.addEventListener('click', mobileMenuClick)

        return () => document.body.removeEventListener('click', mobileMenuClick)
    }, [])

    return (
        <header className="header">
            <div className="container">
                <Link to={"/"} className="header__logo">
                    <img src={Logo} alt="" className="header__logoimg"/>
                </Link>
                <ul  className={classNames("header__menu",{
                    "header__menu--active": openMenu && document.documentElement.clientWidth<=768
                })}>
                    <li className="header__menuitem">
                        <Link className={"header__menulink"} to="/catalog">Каталог нерухомості</Link>
                    </li>
                    <li className="header__menuitem">
                        <Link className={"header__menulink"} to="/contact">Контакти</Link>
                    </li>
                </ul>
                <div className="burger" onClick={onBurgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;