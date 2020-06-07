import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";


import collapsiblestyles from './Collapsible.module.scss';

const Collapsible = ({ title, children, type }) => {
    const [open, setopen] = useState(false)
    

    const toggle = () => {
        setopen((prevState) => !prevState)        
    }

    return(
        <>
            {
                type === 'link' ?
                    <li>
                        <div className={collapsiblestyles["link-style"]} onClick={(e) => toggle(e)}>
                            <FontAwesomeIcon className={collapsiblestyles["sidenav-icon"]} icon={faHospital} />
                            <span>{title}</span>
                        </div>
                        <div className={open ? collapsiblestyles.bodyopened : collapsiblestyles.bodyclosed}>{ children }</div>
                    </li>
                    :
                    <div className={collapsiblestyles.collapsible}>
                        <div onClick={(e) => toggle(e)} className={collapsiblestyles.collapsibleheader}>{title}</div>
                        { <div className={open ? null : collapsiblestyles.bodyclosed}>{ children }</div>  }
                    </div>
            }
        </>
    )
}

export default Collapsible;