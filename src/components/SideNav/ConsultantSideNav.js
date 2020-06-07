import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import sidenavstyles from './SideNav.module.scss';
import { connect } from "react-redux";
import { consultantSelectedNav } from "../../redux/actions/ConsultantDashboardAction";

const ConsultantSideNav = ({consultantSelectedNav}) => {
      
  const handlePatients = () => {
    consultantSelectedNav({selectedNav: 'PATIENTS'})
  }

  const handleForum =  () => {
    consultantSelectedNav({selectedNav: 'FORUM'})
  }

  const handleHealthTools =  () => {
    consultantSelectedNav({selectedNav: 'HEALTHTOOLS'})
  }

  return (
      <aside className={sidenavstyles["sidenav"]}>
          <ul>
          <li onClick={handlePatients}>
                <FontAwesomeIcon className={sidenavstyles["sidenav-icon"]} icon={faHospital} />
                <span>Patients</span>
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
  { consultantSelectedNav }
)(ConsultantSideNav);