import {Repeat} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import Cursor from "../components/cursor";
import AboutUs from "../pages/about-us";
import Contact from "../pages/contact";
const Router=()=>{
    return(
        <>
            {/*<Cursor />*/}
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        </>
    )
}
export default Router