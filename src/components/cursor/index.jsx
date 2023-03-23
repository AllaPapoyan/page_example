import useCursor from "./useCursor";
import "./style.scss"
import {motion} from "framer-motion";

const Cursor=()=>{
    const {cursorX,}=useCursor()
    return(

            <div>
                <motion.div  animate={{x:cursorX.x,}} className="Large_circle"></motion.div>

                {/*<motion.div animate={{x:cursorX.x-8, y:cursorY.y-8}} className="small_circle"></motion.div>*/}
            </div>

    )
}
export default Cursor