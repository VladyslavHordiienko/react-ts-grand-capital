import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default MainLayouts;