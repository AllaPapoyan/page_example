import {useState,useEffect} from "react";

const useHeader=()=>{
   const [changeIcon,setChangeIcon]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)
    const isChange=()=> {
        setChangeIcon(!changeIcon)
        if(width > 767 ) {
            setChangeIcon(false)
        }
    }
    const isOpen=()=>{
       setChangeIcon(false)
        console.log(changeIcon)
    }

    return{
        changeIcon,isChange,width,setWidth,isOpen
    }
}
export default useHeader