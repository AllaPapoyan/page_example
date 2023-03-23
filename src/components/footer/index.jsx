import "./style.scss"
import {Link} from "react-router-dom";
import IconsComponent from "../icons-component";
const Footer=()=>{

    return(
        <div className={"G-container footer"}>
            <p className={"footer-title"}>Start Connecting</p>
            <div className={"footer-cont"}>
                <p className={"footer-text"}>Confirm your request</p>
                <div className={"circle"}><p>Contact us</p></div>
                <p className={"footer-text-two"}>and wait for a response</p>
            </div>

            <div className={"footer-items G-flex G-justify-around"}>
                <Link style={{textDecoration:"none",color:"#FAFAFA"}} too={"/"}><span className={"icon  group-404-icon logo"}></span></Link>
                <ul className={"sitemap"}>
                    <li className={"sitemap-item"}>Sitemap</li>
                    <li className={"sitemap-item"}>About us</li>
                    <li className={"sitemap-item"}>Contact</li>
                    <li className={"sitemap-item"}><Link style={{textDecoration:"none",color:"#999999"}} too={"/"}>Courses</Link></li>

                </ul>
                <ul className={"address"}>
                    <li className={"address-item"}>Address</li>
                    <li className={"address-item"}>Armavir, Isahakyan street</li>
                    <li className={"address-item"}>+374 41 202 252</li>
                </ul>
            </div>
            <div className={"end"}>
                <p className={"end-text"}>© Group 404 LLC 2022</p>
                <p className={"end-text"}>Privacy Policy</p>
                <div className={"end-icon"}><IconsComponent /></div>
            </div>
        </div>
    )
}
export default Footer