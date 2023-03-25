import "./style.scss"
import useValidation from "./useValidation";
import imageBlock from "../../assets/images/contacts-image.jpg"
import IconsComponent from "../icons-component";
import InputComponent from "../input-component";
const Validation=()=>{
    const {data,errData,emailErr,validation,handleOnChange}=useValidation()
    return(
        <div className={"G-container validation"}>
            <div className={"validation-img"} style={{backgroundImage: `url(${imageBlock})`}} />
            <div className={"validation-forms"}>
                <div className='P-input-block' >
                    <InputComponent className={"input"} type={'text'}
                                    value={data.firstName}
                                    onChange={(e) => {handleOnChange(e)}}
                                    name='firstName'
                                    isErr={errData.firstName}
                                    errMessage={"*this is required field"}
                                    placeholder={"First Name"}
                    />
                </div>
                <div className='P-input-block'>
                    <InputComponent   type={'text'}
                                      onChange={(e) => {handleOnChange(e)}}
                                      name='lastName'
                                      value={data.lastName}
                                      isErr={errData.lastName}
                                      errMessage={"*this is required field"}
                                      placeholder={"Last name"}
                                      className={'input'}/>
                </div>
                <div className='P-input-block'>
                    <InputComponent  type={'email'}
                                     onChange={(e) => {handleOnChange(e)}}
                                     name='email'
                                     value={data.email}
                                     isErr={errData.email}
                                     errMessage={"*this is required field"}
                                     placeholder={"Email"}
                                     className={'input'}  />
                    <p style={{color: 'red', textAlign: 'right'}}>{errData.email? '': emailErr}</p>
                </div>
                <div className='P-input-block'>
                    <InputComponent  type={'text'}
                                     onChange={(e) => {handleOnChange(e)}}
                                     name='company'
                                     placeholder={"Company"}
                                     value={data.company} isErr={errData.company}
                                     errMessage={"*this is required field"}
                                     className={'input'} />
                </div>
                <div className='P-input-block'>
                    <InputComponent  type={'text'}
                                     onChange={(e) => {handleOnChange(e)}}
                                     name='message'
                                     placeholder={"Massage"}
                                     value={data.message}
                                     isErr={errData.message}
                                     errMessage={"*please enter at least 80 words"}
                                     className={'input'} />
                </div>
                <button onClick={()=>validation()}  className={"btn-valid"}>Submit <span  className={"icon up-arrow up"}/></button>
            </div>
        </div>
    )
}
export default Validation