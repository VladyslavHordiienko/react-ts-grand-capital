import React from 'react';
import MainLayouts from "./layouts/MainLayouts";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SvgBodies from "./utils/SVGBodies";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Card from "./pages/Card";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Contact from "./pages/Contact";



function App() {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<MainLayouts/>}>
                            <Route path={""} element={<Home/>}/>
                            <Route path={"catalog"} element={<Catalog/>}/>
                            <Route path={"catalog/:title"} element={<Card/>}/>
                            <Route path={"contact"} element={<Contact/>}/>
                        </Route>
                    </Routes>
                </Router>
            </Provider>
            <SvgBodies/>
        </>
    );
}

export default App;
