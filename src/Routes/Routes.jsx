// import { Route,Routes} from "react-router-dom";

// import Home from "../pages/Home";
// import Doctors from "../pages/Doctors/Doctors";
// import DoctorDetails from "../pages/Doctors/DoctorDetails";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";
// import Contact from "../pages/Contact";
// import Services from "../pages/Services";

// const Routers = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />}  ></Route>
//             <Route path="/home" element={<Home />}  ></Route>
//             <Route path="/doctors" element={<Doctors />}  ></Route>
//             <Route path="/doctors/:id" element={<DoctorDetails />}  ></Route>
//             <Route path="/login" element={<Login />}  ></Route>
//             <Route path="/register" element={<SignUp />}  ></Route>
//             <Route path="/contact" element={<Contact />}  ></Route>
//             <Route path="/services" element={<Services />}  ></Route>
//         </Routes>
//     );
// };

// export default Routers;

import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Layout from "../layout/layout";

export const Routes = createBrowserRouter([
    {
        path: "/", 
        element: <Layout></Layout>, 
        children: [

            { path: "/home", element: <Home></Home> },
            { path: "/doctors", element: <Doctors></Doctors> },
            { path: "/doctors/:id", element: <DoctorDetails></DoctorDetails> },
            { path: "/login", element: <Login></Login> },
            { path: "/register", element: <SignUp></SignUp> },
            { path: "/contact", element: <Contact></Contact> },
            { path: "/services", element: <Services></Services> }
        ]
    },

]);