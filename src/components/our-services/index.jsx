import "./style.scss"
import {useState} from "react";
import {data} from "./data";
import {motion} from "framer-motion";
import DescriptionComponent from "../description-component";
const OurServices=()=>{

    const [isActive,setIsActive]=useState(false)
    const [activeName]=useState("Design")
    const handelClick=(name)=>{
        console.log(isActive)
    }
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

        <div className={"our-services"}>
            <motion.div initial='hidden' whileInView='visible'  className={"G-container our-services-container"}>
                <motion.p variants={TitleAnimationOne}
                          className={"services-title"}>Our services</motion.p>
                <motion.ul initial='hidden' whileInView='visible'
                           className={"our-services-menu"}  >
                    <motion.li variants={TitleAnimationOne}  custom={2} onClick={handelClick} className={ !isActive ?" active":"menu-item"}>Design</motion.li>
                    <motion.li variants={TitleAnimationOne}  custom={3} onClick={handelClick}  className={ isActive ?" active":"menu-item"}>Robotic</motion.li>
                    <motion.li variants={TitleAnimationOne}  custom={4} onClick={handelClick}  className={ isActive ?" active":"menu-item"}>Development</motion.li>
                    <motion.li variants={TitleAnimationOne}  custom={5} onClick={handelClick}  className={ isActive ?" active":"menu-item"}>Engineering</motion.li>
                    <motion.li variants={TitleAnimationOne}  custom={6} onClick={handelClick}  className={ isActive ?" active":"menu-item"}>Branding</motion.li>
                </motion.ul>
            </motion.div>

            <motion.div className={"G-container services-list-container"}>
                {
                    data.map((el)=>{return(
                        <div className={"list-container"} key={el.id}>
                           <div className={"img-cont"}>
                               <img src={el.img} alt=""/>
                           </div>
                            <div className={"text-cont"}>
                                <p className={"cont-title"}>{el.title}</p>
                                <p className={"cont-desc"}>{el.description}</p>
                            </div>

                        </div>
                    )})
                }
            </motion.div>

            <DescriptionComponent  textDesc={"Excellent for innovative and design challenges."}/>
        </div>)
}
export default OurServices