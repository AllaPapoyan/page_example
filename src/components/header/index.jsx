import "./style.scss"
import IconsComponent from "../icons-component";
import useHeader from "./useHeader";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
const Header=()=>{
  const {changeIcon,isChange,setOpen,open,width,setWidth}=useHeader()


    return(<header className={"header"}>
        <div className={"G-container G-flex header-container  "}>
            <nav className={"navbar"}>
                <NavLink style={{textDecoration:"none",color:"#FAFAFA"}} to={"/"}><span className={"icon  group-404-icon logo"}></span></NavLink>
                <ul className={ !changeIcon ?"menu ":'menuOpen'}>
                    <li className={"menu-item" }><NavLink style={{textDecoration:"none",color:"#FAFAFA"}} to="/">Courses</NavLink></li>
                    <li className={"menu-item"}><NavLink style={{textDecoration:"none",color:"#FAFAFA"}} to="/about_us">About Us</NavLink></li>
                    <li className={"menu-item"}><NavLink style={{textDecoration:"none",color:"#FAFAFA"}} to="/contact">Contact</NavLink></li>
                    <li className={"menu-item-icon"}><IconsComponent /></li>
                </ul>
            </nav>
            <div className={"icons-bloc"}>
                <div className={"icons"}> <IconsComponent /></div>
            <div className="burger-icon" onClick={isChange}>
                    <div className={!changeIcon ? 'icon-1' : "close-1"}></div>
                    <div className={!changeIcon ? 'icon-2' : "close-2"}></div>
                    <div className={!changeIcon ? 'icon-3' : "close-3"}></div>
                </div>
                </div>
        </div>
    </header>)
}
export default Header