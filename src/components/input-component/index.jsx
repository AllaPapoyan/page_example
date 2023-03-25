const InputComponent=({ type, className, placeholder, onChange, name, value, isErr, errMessage })=>{
    function  getOnChange (e){
        onChange(e)
    }

    return(<div>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            className={className}
            onChange={getOnChange} />
        <p style={{color: 'red', textAlign: 'right'}}>{isErr? errMessage: ''}</p>

    </div>)
}
export default InputComponent