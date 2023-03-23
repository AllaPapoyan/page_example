import "./style.scss"
import useValidation from "./useValidation";
import imageBlock from "../../assets/images/contacts-image.jpg"
const Validation=()=>{
    // const {data,errData,emailErr,validation,handleOnChange}=useValidation()
    return(
        <div className={"G-container validation"}>
            <div className={"validation-img"} style={{backgroundImage: `url(${imageBlock})`}} />
            <div className={"validation-forms"}>

                <input  className={"input"}
                        type={'text'}  placeholder={"Last Name"}/>
                <input type="text" className={"input"}
                       placeholder={"Last Name"}/>
                <input type="text" className={"input"} placeholder={"Email"}/>
                <input type="text" className={"input"} placeholder={"Company"}/>
                <input type="text" className={"input"} placeholder={"Message"}/>
                <button  className={"btn-valid"}>Submit <span  className={"icon up-arrow up"}/></button>
            </div>
        </div>
    )
}
export default Validation