
import { Outlet } from "react-router-dom";
import Header from "../Header"
import Footer from "../Footer";
import "../../index.css";




const Layout = () => {

    return (
        <>
           

            <Header isOpen={false} setIsOpen={function (): void {
                throw new Error("Function not implemented.");
            } } setIsBasketOpen={function (): void {} } />
            
                <main>
                    <Outlet />
                </main>
           
            <Footer />
        </>
    );
}

export default Layout;