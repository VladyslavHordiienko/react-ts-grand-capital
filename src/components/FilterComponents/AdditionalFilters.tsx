import React from 'react';

const AdditionalFilters:React.FC = () => {
    return (
        <div className="banner__filterbox">
            <div className="banner__filterclose">
                <svg className="icon">
                    <use xlinkHref="#close-icon"></use>
                </svg>
            </div>
            <div className="banner__filteritem">
                <div className="banner__filtertitle">Кількість кімнат</div>
                <ul className="banner__filterlist">
                    <li className="banner__filteriteminner">1</li>
                    <li className="banner__filteriteminner">2</li>
                    <li className="banner__filteriteminner">3</li>
                    <li className="banner__filteriteminner">4+</li>
                </ul>
            </div>
            <div className="banner__filteritem">
                <div className="banner__filtertitle">Поверховість будинку</div>
                <ul className="banner__filterlist">
                    <li className="banner__filteriteminner">до 5</li>
                    <li className="banner__filteriteminner">6 - 9</li>
                    <li className="banner__filteriteminner">10 - 16</li>
                </ul>
            </div>
            <div className="banner__filteritem">
                <div className="banner__filtertitle">Стан житла</div>
                <ul className="banner__filterlist">
                    <li className="banner__filteriteminner">без ремонту</li>
                    <li className="banner__filteriteminner">
                        з ремонтом
                    </li>
                    <li className="banner__filteriteminner">з чорновим оздобленням</li>
                </ul>
            </div>
            <div className="banner__filteritem">
                <div className="banner__filtertitle">Тип будинку</div>
                <ul className="banner__filterlist">
                    <li className="banner__filteriteminner">цегляний</li>
                    <li className="banner__filteriteminner">блоковий</li>
                    <li className="banner__filteriteminner">монолітний</li>
                </ul>
            </div>
        </div>
    );
};

export default AdditionalFilters;