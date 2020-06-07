import React from 'react';
import Patients from './Patients';
import Forum from './Forum';
import HealthTool from './HealthTool';
import { connect } from "react-redux";
import { getSelectedNav, getConsultantData } from "../../../redux/selecters/ConsultantData";

const Consultant = (props) => {
  return (
    <>
      {props.patientsData && props.patientsData.length && props.selectedNav === 'PATIENTS' && props.match.params.id &&
        <Patients consultantId={props.match.params.id} pDatas={props.patientsData} />
      }
      {props.patientsData && props.patientsData.length && props.selectedNav === 'PATIENTS' && props.match.params.id &&
        <Patients consultantId={props.match.params.id} pDatas={props.patientsData} />
      }
      {props.patientsData && props.patientsData.length && props.selectedNav === 'FORUM' && props.match.params.id &&
        <Forum consultantId={props.match.params.id} />
      }
      {props.patientsData && props.patientsData.length && props.selectedNav === 'HEALTHTOOLS' && props.match.params.id &&
        <HealthTool consultantId={props.match.params.id} pDatas={props.patientsData} />
      }
    </>
  );
};

const mapStateToProps = state => {
  const selectedNav = getSelectedNav(state);
  const patientsData = getConsultantData(state);
  return { selectedNav, patientsData };
};

export default connect(mapStateToProps)(Consultant);
