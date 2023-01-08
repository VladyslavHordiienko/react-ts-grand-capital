import React from 'react';

const ContactBlock:React.FC = () => {
    return (
        <div className="contact__linkblock">
            <div className="contact__linkitem">
                <div className="contact__linktitle">
                    Телефон:
                </div>
                <div className="contact__linkwrap column">
                    <a href="tel:+380633197707" className="contact__link">+38 (063) 319-77-07</a>
                    <a href="tel:+380935026932" className="contact__link">+38 (093) 502- 69-32</a>
                </div>
            </div>
            <div className="contact__linkitem">
                <div className="contact__linktitle">
                    Соціальні мережі:
                </div>
                <div className="contact__linkwrap">
                    <a href="https://www.instagram.com/grandcapital_realty/?igshid=YmMyMTA2M2Y%3D"
                       className="contact__link">
                        <svg className="icon instagram">
                            <use xlinkHref="#instagram"></use>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/grandcapitalrealestate" className="contact__link">
                        <svg className="icon facebook">
                            <use xlinkHref="#facebook"></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="contact__linkitem">
                <div className="contact__linktitle">
                    Написати нам:
                </div>
                <div className="contact__linkwrap">
                    <a href="mailto:Gcgrandcapital@gmail.com" className="contact__link">
                        <svg className="icon message-icon">
                            <use xlinkHref="#message-icon"></use>
                        </svg>
                    </a>
                    <a href="https://t.me/+380935026932" className="contact__link">
                        <svg className="icon paper-plane-icon">
                            <use xlinkHref="#paper-plane-icon"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;