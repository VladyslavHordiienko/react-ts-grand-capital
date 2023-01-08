import React from 'react';

const LangBox:React.FC = () => {
    return (
        <div className="header__langwrap">
            <div className="header__langbox">
                <svg className="icon lang">
                    <use xlinkHref="#lang-icon"></use>
                </svg>
                <span className="header__currentlang">UA</span>
                <svg className="icon arrow">
                    <use xlinkHref="#arrow-icon"></use>
                </svg>
            </div>
            <div className="header__selectbody">
                <div className="header__selectitem">
                    <svg className="icon">
                        <use xlinkHref="#russia-icon"></use>
                    </svg>
                    <span className="header__selecttext">русский</span>
                </div>
                <div className="header__selectitem">
                    <svg className="icon">
                        <use xlinkHref="#ukraine-icon"></use>
                    </svg>
                    <span className="header__selecttext">українська</span>
                </div>
                <div className="header__selectitem">
                    <svg className="icon">
                        <use xlinkHref="#united-kingdom-icon"></use>
                    </svg>
                    <span className="header__selecttext">english</span>
                </div>
            </div>
        </div>
    );
};

export default LangBox;