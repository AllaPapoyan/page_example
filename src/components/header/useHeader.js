import {useState,useEffect} from "react";

const useHeader=()=>{
   const [changeIcon,setChangeIcon]=useState(false)
    const [open,setOpen]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)
    const isChange=()=> {
        setChangeIcon(!changeIcon)
        if(width > 767 && open === true) {
            setOpen(false)
        }
    }

    return{
        changeIcon,isChange,setOpen,open,width,setWidth
    }
}
export default useHeader