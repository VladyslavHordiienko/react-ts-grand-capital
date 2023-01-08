import React from 'react';
import SelectInputs from "./FilterComponents/SelectInputs";
import RangeInputs from "./FilterComponents/RangeInputs";
import YellowButton from "./UI/YellowButton";
import SearchInput from "./FilterComponents/SearchInput";
import {useDispatch} from "react-redux";
import {setInitialFilters} from "../redux/slices/filterSlice";


const Filter: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <div className="banner__row">
                <div className="banner__action">
                    <div className="banner__fields">
                        <SelectInputs/>
                        <RangeInputs/>
                        <SearchInput/>
                    </div>
                    <YellowButton onClick={() => dispatch(setInitialFilters())} bannerSearchClass>
                        <svg className="icon">
                            <use xlinkHref="#filterReset"></use>
                        </svg>
                        <span className="banner__filterbtntext">Сбросить</span>
                    </YellowButton>
                </div>
            </div>
        </div>
    );
};

export default Filter;