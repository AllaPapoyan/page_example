import "./style.scss"
import {motion} from "framer-motion";


const TitleComponent=({titleOne,titleTwo})=>{
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
            <motion.div initial='hidden' whileInView='visible'  className={"G-container title-component"}>
                <motion.h1 variants={TitleAnimationOne} custom={1}  className={"title-white"}>{titleOne} </motion.h1>
                <motion.h1 variants={TitleAnimationOne} custom={2} className={"title-grey"}>{titleTwo} </motion.h1>
            </motion.div>
    )
}
export default TitleComponent