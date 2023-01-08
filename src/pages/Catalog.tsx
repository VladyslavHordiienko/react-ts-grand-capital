import React from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Banner from "../components/Banner";
import CatalogProductBox from "../components/CatalogComponents/CatalogProductBox";
import CatalogDescription from "../components/CatalogComponents/CatalogDescription";
import CatalogConsult from "../components/CatalogComponents/CatalogConsult";


const Catalog: React.FC = () => {
    return (
        <>
            <Breadcrumbs/>
            <Banner/>
            <section className="catalog">
                <h1 className="common-title">Квартири у Києві</h1>
                <div className="catalog__wrap">
                    <div className="catalog__content">
                        <CatalogProductBox/>
                        <CatalogDescription/>
                    </div>
                    <CatalogConsult/>
                </div>
            </section>
        </>
    );
};

export default Catalog;