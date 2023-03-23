import './style.scss'
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";


const DescriptionComponent= ({textDesc,})=>{
    const location = useLocation();
    const isActive=location.pathname==="contact" ||  location.pathname=== "about_us";


    const TitleAnimationOne ={
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: custom=>({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2 ,
                duration: 1,
                delayChildren: 1,
                ease: 'easeOut',}
        }),
    }


    return(<div className={"G-container "} >
        <div className={"descriptionComponent "} >
            <motion.p initial='hidden' whileInView='visible' variants={TitleAnimationOne} className={"P-description"}>
                {textDesc}
            </motion.p>
        </div>

    </div>)
}
export default DescriptionComponent