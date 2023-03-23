import TitleComponent from "../title-component";
import bbb from "../../assets/images/galaxy-night-view1.png"
import './style.scss'
const BgComponent=()=>{
    return(
        <div className={"bg-component"} style={{backgroundImage:`url(${bbb})`}}>
            <TitleComponent titleOne={"Educate and create "} titleTwo={"with our team"} />
        </div>
    )
}
export default BgComponent