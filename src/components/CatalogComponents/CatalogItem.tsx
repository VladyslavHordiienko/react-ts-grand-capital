import React from 'react';
import {Link} from "react-router-dom";
import {priceFormatter} from "../../utils/priceFormatter";
import {IApartments} from "../../redux/slices/apartmentSlice";

type propTypes = {
    apartment:IApartments
}

const CatalogItem:React.FC<propTypes> = ({apartment}) => {
    return (
        <div className="catalog__item">
            <Link  to={'/catalog/'+ apartment.title}>
                <img
                    src={apartment.photos[0]}
                    alt=""
                    className="catalog__itemimg"
                />
            </Link>
            <div className="catalog__itemcontent">
                <Link  to={'/catalog/'+ apartment.title} className="catalog__itemtitle">
                    {apartment.title}
                </Link>
                <div className="offers__location">
                    <svg className="icon">
                        <use xlinkHref="#map-target"></use>
                    </svg>
                    <div className="offers__locationtext">{apartment.district}</div>
                </div>
                <div className="offers__price">{priceFormatter(+apartment.price, 'price')} ₴</div>
                <div className="offers__pricebottom">{priceFormatter(apartment.priceForM2, 'priceForM2')} за
                    м²
                </div>
                <div className="catalog__itemdesc">
                    {apartment.description}
                </div>
                <div className="catalog__areas">
                    <div className="catalog__areastext">
                        Общая площадь<span>{apartment.area} м²</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;