import React from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Banner from "../components/Banner";
import HomeContact from "../components/HomeComponents/HomeContact";
import contactLogo from "../assets/images/logo_contacts.svg";
import ContactBlock from "../components/ContactComponents/ContactBlock";


const Contact: React.FC = () => {
    return (
        <>
            <Breadcrumbs/>
            <Banner/>
            <div className="common-title center">Контакти агенції нерухомості</div>
            <img src={contactLogo} alt="" className="contact__logo"/>
            <p className="contact__address center">м. Київ, вул. Саксаганського 119. БЦ "Ботанік тауер"</p>
            <HomeContact/>
            <ContactBlock/>
        </>
    );
};

export default Contact;