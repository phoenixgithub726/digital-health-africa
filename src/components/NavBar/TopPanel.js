import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faFlask, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

import topPanelStyles from "./TopPanel.module.scss";

const TopPanel = ({active, visibleModalForm, onhideModalForm, onshowModalForm}) => {

  const onClickQuestionHandler = () => {
    visibleModalForm ? onhideModalForm() : onshowModalForm();
  };

  return (
    <div className={topPanelStyles["dropdown-menu"]}>
      <div className={`${topPanelStyles["menu"]} ${topPanelStyles[active ? "expanded" : ""]}`}>
        <ul>
          <li onClick={onClickQuestionHandler}>
            <FontAwesomeIcon
              style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
              icon={faComments}
            />{" "}
            Ask Question?
          </li>
          <li>
            <FontAwesomeIcon
              style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
              icon={faCalendarCheck}
            />{" "}
            Book an Appointment
          </li>
          <li>
            <FontAwesomeIcon
              style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
              icon={faUserMd}
            />{" "}
            Consult Online
          </li>
          <li>
            <FontAwesomeIcon
              style={{ fontSize: "1.1rem", marginRight: ".3rem" }}
              icon={faFlask}
            />{" "}
            Book Lab Test
          </li>
        </ul>
        <div className={topPanelStyles["topPanelBrands"]}>
          <span><FontAwesomeIcon
            style={{ fontSize: ".9rem", marginRight: ".9rem" }}
            icon={faFacebookF}
          /></span>
          <span><FontAwesomeIcon
            style={{ fontSize: ".9rem", marginRight: ".9rem" }}
            icon={faTwitter}
          /></span>
          <span><FontAwesomeIcon
            style={{ fontSize: ".9rem", marginRight: ".9rem" }}
            icon={faLinkedinIn}
          /></span>
          <span><FontAwesomeIcon
            style={{ fontSize: ".9rem", marginRight: ".9rem" }}
            icon={faYoutube}
          /></span>
        </div>
      </div>
    </div>
  );
}

export default TopPanel;
