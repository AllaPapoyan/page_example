// import {useState} from "react";
// const useValidation=()=>{
//     const [errData , setErrData ] = useState({
//         firstName: false,
//         lastName: false,
//         email: false,
//         company: false,
//         message: false,
//     })
//     const [data, setData] = useState({
//         firstName:  '',
//         lastName: '',
//         email: '',
//         company: '',
//         message: '',
//     })
//     const [emailErr, setEmailErr] = useState('')
//
//     const handleOnChange = (e) => {
//
//         setData({...data, [e.target.name]: e.target.value})
//     }
//
//
//     const emailValidation = (email) => {
//         const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         (regex.test(email) == false || email.trim() == '')?
//             setEmailErr(" "): setEmailErr("")
//     }
//
//     const isEmpty = (data) => {
//         return data.trim().length
//     }
//
//     const validation = () =>  {
//         const errors = {
//             firstName: false,
//             lastName: false,
//             email: false,
//             company: false,
//             message: false,
//         }
//
//         emailValidation(data.email)
//         isEmpty(data.firstName)? errors.firstName = false: errors.firstName = true
//         isEmpty(data.lastName)? errors.lastName = false: errors.lastName = true
//         isEmpty(data.email)? errors.email = false: errors.email = true
//         isEmpty(data.company)? errors.company = false: errors.company = true
//         isEmpty(data.message)? errors.message = false: errors.message = true
//         setErrData(errors)
//     }
//
//     return{
//     data, errData,emailErr,validation,isEmpty,handleOnChange,
//     }
// }
// export default useValidation