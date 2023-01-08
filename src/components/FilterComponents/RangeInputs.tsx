import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setPriceFrom, setPriceTo} from "../../redux/slices/filterSlice";

const RangeInputs: React.FC = () => {
    const {priceFrom, priceTo} = useSelector((state: RootState) => state.filter)

    const dispatch = useDispatch()

    return (
        <div className="banner__range">
            <input
                type="text"
                className="banner__input"
                placeholder="Ціна від"
                value={priceFrom}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(setPriceFrom(e.target.value))}
            />
            <div className="banner__actionseparator">-</div>
            <input
                type="text"
                className="banner__input"
                placeholder="до"
                value={priceTo}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(setPriceTo(e.target.value))}
            />
            <div className="banner__currency">₴</div>
        </div>
    );
};

export default RangeInputs;