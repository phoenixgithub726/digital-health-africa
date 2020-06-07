import React from 'react';

const SelectLabelField = ({name, placeholder, className, options, onChange, width, label, clear}) => {
    return(
        <div style={{width: width, float:'left', clear: clear}}>
            <p>{label}</p>
            <select placeholder={placeholder} name={name} className={className} onChange={onChange}>
                {
                    options.map((e, index) => {
                        return(
                            <option key={e.value} value={e.label}>{e.label}</option>                        
                        )
                    })
                }
                
            </select>
        </div>
    )
}

export default SelectLabelField;