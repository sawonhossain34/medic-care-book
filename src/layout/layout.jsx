
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Home from "../pages/Home";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Layout;