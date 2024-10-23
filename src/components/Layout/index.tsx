//import { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../Header"
import Footer from "../Footer";
import "../../index.css";
import { useState } from "react";
import BasketBlock from "../../pages/CartPage/BasketBlock";




const Layout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);

    const isOpenCallback = () => {
        setIsOpen(!isOpen);
    };

    const isBasketOpenCallback = () => {
        setIsBasketOpen(!isBasketOpen)
    }

    return (
        <>
            <Header isOpen={isOpen}
                setIsOpen={isOpenCallback}
                setIsBasketOpen={isBasketOpenCallback} />
 {isBasketOpen && <BasketBlock setIsBasketOpen={isBasketOpenCallback} />}
            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default Layout;