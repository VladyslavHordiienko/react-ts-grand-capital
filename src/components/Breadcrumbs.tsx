import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import {Link, useLocation} from "react-router-dom";
import uniqid from "uniqid";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";


const Breadcrumbs: React.FC = () => {
    const {cardApartment} = useSelector((state: RootState) => state.card)
    const routes = [
        {path: "/", breadcrumb: "Головна"},
        {path: "/catalog", breadcrumb: "Каталог"},
        {path: "/contact", breadcrumb: "Контакти"},
    ];
    if(cardApartment){
        routes.push({path: "/catalog/:title", breadcrumb: cardApartment[0].title})
    }
    const breadcrumbs = useBreadcrumbs(routes);
    return (
        <section className="breadcrumbs">
            <ul className="breadcrumbs__list">
                {breadcrumbs && breadcrumbs.map(({breadcrumb, match}) => (
                    <li key={uniqid()} className="breadcrumbs__item">
                        <Link to={match.pathname}>{breadcrumb}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Breadcrumbs;