import React from 'react';

const InputLabelField = ({type, name, placeholder, value, className, onChange, width, label, clear}) => {

    return(
        <div style={{width: width, float:'left', clear: clear}}>
            <p>{label}</p>
            <input type={type} name={name} placeholder={placeholder} value={value} className={className} onChange={onChange}/>
        </div>        
    )
}

export default InputLabelField;