import React from 'react'
import Consultants from './Consultants'
import HealthTool from './HealthTool'
import Forum from './Forum'
import { connect } from "react-redux";
import {getSelectedNav, getPatientData} from "../../../redux/selecters/PatientData";

const Patient = (props) => {
    return(
        <>
            {props.consultantsData && props.consultantsData.length && props.selectedNav === 'CONSULTANTS' && 
                <Consultants patientId={props.match.params.id} cDatas={props.consultantsData}/>
            }
            {props.consultantsData && props.consultantsData.length && props.selectedNav === 'FORUM' && 
                <Forum patientId={props.match.params.id} cDatas={props.consultantsData}/>
            }         
            {props.consultantsData && props.consultantsData.length && props.selectedNav === 'HEALTHTOOLS' && 
                <HealthTool patientId={props.match.params.id} cDatas={props.consultantsData}/>
            }                 
        </>
    )
}

const mapStateToProps = state => {
    const selectedNav = getSelectedNav(state);
    const consultantsData = getPatientData(state)
    return { selectedNav, consultantsData };
};

export default connect(mapStateToProps)(Patient);