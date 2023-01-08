import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import HomeCatalogItem from "./HomeCatalogItem";
import uniqid from "uniqid";


const HomeCatalog: React.FC = () => {
    const {apartments} = useSelector((state: RootState) => state.apartment)

    return (
        <section className="offers">
            <div className="common-title">Найкращі пропозиції</div>
            <div className="offers__grid">
                {apartments && apartments.slice(0, 4).map(apartment => (
                    <HomeCatalogItem key={uniqid()} apartment={apartment}/>
                ))}
            </div>
        </section>
    );
};

export default HomeCatalog;