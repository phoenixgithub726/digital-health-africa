import React from 'react';




const SelectField = ({name, placeholder, className, options, onChange}) => {


    return(
        <select placeholder={placeholder} name={name} className={className} onChange={onChange}>
            {
                options.map((e, index) => {
                    return(
                        <option key={e.value} value={e.label}>{e.label}</option>                        
                    )
                })
            }
            
        </select>
    )
}

export default SelectField;