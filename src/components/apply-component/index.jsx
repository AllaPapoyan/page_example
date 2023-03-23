import "./style.scss"
import {motion} from "framer-motion";
import DescriptionComponent from "../description-component";
import useApply from "./useApply";


const ApplyComponent=()=>{
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

    return(
        <div className={"apply-component"}>
            <div className={"G-container "}>
                <motion.div initial='hidden' whileInView='visible' className={"apply-title-component"}>
                    <motion.p variants={TitleAnimationOne} custom={1} className={"apply-title"}>Apply to our special
                        <motion.span variants={TitleAnimationOne} custom={2} style={{color:"#969696"}}> courses</motion.span></motion.p>

                    <motion.button variants={TitleAnimationOne} custom={3} className={"apply-btn"}>Apply now</motion.button>
                </motion.div>
            </div>
            <div className={"apply-bg"} ></div>
            <DescriptionComponent textDesc={"We are ready to produce something special."} />


        </div>
    )
}
export default ApplyComponent