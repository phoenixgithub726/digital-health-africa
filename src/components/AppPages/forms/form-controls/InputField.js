import React from 'react';




const InputField = ({type, name, placeholder, value, className, onChange}) => {


    return(
        <input type={type} name={name} placeholder={placeholder} value={value} className={className} onChange={onChange}/>
        
    )
}

export default InputField;