import React from 'react';
import {IApartments} from "../../redux/slices/apartmentSlice";
import {priceFormatter} from "../../utils/priceFormatter";
import {Link} from "react-router-dom";


type PropsType = {
    apartment: IApartments
}

const HomeCatalogItem:React.FC<PropsType> = (props) => {
    const {apartment} = props
    return (
        <div className="offers__item">
            <Link to={"/catalog/" + apartment.title} className="offers__link">
                <img src={apartment.photos[0]} alt="" className="offers__img"/>
            </Link>
            <Link to={"/catalog/" + apartment.title} className="offers__link">
                <div className="offers__titleinner">
                    {apartment.title}
                </div>
            </Link>
            <div className="offers__location">
                <svg className="icon">
                    <use xlinkHref="#map-target"></use>
                </svg>
                <div className="offers__locationtext">{apartment.district}</div>
            </div>
            <div className="offers__price">{priceFormatter(+apartment.price, 'price')} ₴</div>
            <div className="offers__pricebottom">{priceFormatter(apartment.priceForM2, 'priceForM2')} ₴ за м²</div>
        </div>
    );
};

export default HomeCatalogItem;