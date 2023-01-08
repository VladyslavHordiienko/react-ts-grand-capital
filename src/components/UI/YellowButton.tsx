import React, {ReactNode} from 'react';
import classNames from "classnames";

type propsType = {
    children:React.ReactNode | React.ReactNode[]
    bannerSearchClass?: boolean
    bannerFilterBtn?: boolean
    onClick?: () => void
}

const YellowButton:React.FC<propsType> = (props) => {
    return (
        <button onClick={props.onClick} className={classNames("button", {
            "banner__search": props.bannerSearchClass,
            "banner__filterbtn": props.bannerFilterBtn,
        })}>
            {props.children}
        </button>
    );
};

export default YellowButton;