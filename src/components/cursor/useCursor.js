import {useEffect, useState} from "react"
import {firstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

const useCursor=()=>{
    const [cursorX, setCursorX] = useState({x: 0, y: 0})
    // const [cursorY , setCursorY] =useState({x: 0, y: 0})


    useEffect(()=> {
        const mousemove =(e)=>{
       setCursorX({x:e.clientX,y:e.clientY})
      // setCursorY({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("mousemove" ,mousemove)
        return ()=>{
            window.removeEventListener("mousemove" ,mousemove)
        }
    },[])
    return{
        cursorX,
    }
}
export default useCursor