import React, { } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import sidenavstyles from './SideNav.module.scss';
import { connect } from "react-redux";
import { patientSelectedNav } from "../../redux/actions/PatientDashboardAction";

const PatientSideNav = ({ patientSelectedNav }) => {

  const handlePatientRecords = () => {
    patientSelectedNav({ selectedNav: 'RECORDS' })
  }
  const handleConsultants = () => {
    patientSelectedNav({ selectedNav: 'CONSULTANTS' })
  }

  const handleForum = () => {
    patientSelectedNav({ selectedNav: 'FORUM' })
  }

  const handleHealthTools = () => {
    patientSelectedNav({ selectedNav: 'HEALTHTOOLS' })
  }

  return (

    <aside className={sidenavstyles["sidenav"]}>
      {/* left sidebar in Hospital System when login Patient*/}
      <ul>
        <li onClick={handlePatientRecords}>
          <FontAwesomeIcon className={sidenavstyles["sidenav-icon"]} icon={faHospital} />
          <span>Patient Records</span>
        </li>
        <li onClick={handleConsultants}>
          <FontAwesomeIcon className={sidenavstyles["sidenav-icon"]} icon={faHospital} />
          <span>Consultants</span>
        </li>
        <li onClick={handleForum}>
          <FontAwesomeIcon className={sidenavstyles["sidenav-icon"]} icon={faHospital} />
          <span>Forum</span>
        </li>
        <li onClick={handleHealthTools}>
          <FontAwesomeIcon className={sidenavstyles["sidenav-icon"]} icon={faHospital} />
          <span>Health Tools</span>
        </li>
      </ul>
    </aside>
  )
}

export default connect(
  null,
  { patientSelectedNav }
)(PatientSideNav);;