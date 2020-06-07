import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faMoneyBillAlt, faClock, faThumbsUp, faCommentAlt } from "@fortawesome/free-regular-svg-icons";

import doctorsListCardStyles from "./DoctorsListCard.module.scss"

const DoctorsListCard = () => {
  return (
    <div className={doctorsListCardStyles["doctor-card"]}>
      <div className={doctorsListCardStyles["doctor-cardcontent"]}>
        <div className={doctorsListCardStyles["doctor-cardbody"]}>
          <div className={doctorsListCardStyles["doctor-cardbody1"]}>
            <div className={doctorsListCardStyles["doctor-cardbody1media"]}>
              <div className={doctorsListCardStyles["doctor-cardbodyimg"]}>
                <img src={require("../../images/temp1.jpg")} alt="avatar" />
              </div>
              <div className={doctorsListCardStyles["doctor-cardbodyinfo"]}>
                <h2 className={doctorsListCardStyles["doctor-carddocname"]}>Dr. Jane Doe</h2>
                <div className={doctorsListCardStyles["doctor-carddetails"]}>
                  <div className={doctorsListCardStyles["doctor-cardprofession"]}>
                    <h3 className={doctorsListCardStyles["doctor-cardprofessionttext"]}>MBBS, MD - General Medicine</h3>
                  </div>
                  <h3 className={doctorsListCardStyles["doctor-cardexperience"]}>8 years experience overall</h3>
                  <div className={doctorsListCardStyles["doctor-cardspecialization"]}>
                    <span className={doctorsListCardStyles["doctor-cardtag"]}>Allopath</span>
                    <span>
                      <h3 className={doctorsListCardStyles["doctor-cardpostion"]}>General Physician</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={doctorsListCardStyles["doctor-cardbody1sub"]}>
              <div>
                <div className={doctorsListCardStyles["doctor-cardsubcontent"]}>
                  <div className={doctorsListCardStyles["doctor-cardsubspace"]}>
                    <div className={doctorsListCardStyles["doctor-cardspacefill"]}></div>
                  </div>
                  <div className={doctorsListCardStyles["doctor-cardsubclinic"]}>
                    <p>Cocoa Clinic</p>
                    <div className={doctorsListCardStyles["doctor-cardsubclinicitem"]}>
                      <div className={doctorsListCardStyles["doctor-cardsubtreatments"]}>
                        <div>
                          <span className={doctorsListCardStyles["doctor-cardsubtreattext"]}>
                            <h3>Hypertension Treatment</h3>
                          </span>
                        </div>
                      </div>
                      <div className={doctorsListCardStyles["doctor-cardsubtreatments"]}>
                        <div>
                          <span className={doctorsListCardStyles["doctor-cardsubtreattext"]}>
                            <h3>Hypertension Treatment</h3>
                          </span>
                        </div>
                      </div>
                      <div className={doctorsListCardStyles["doctor-cardsubtreatments"]}>
                        <div>
                          <span className={doctorsListCardStyles["doctor-cardsubtreattext"]}>
                            <h3>Hypertension Treatment</h3>
                          </span>
                        </div>
                      </div>
                      <div className={doctorsListCardStyles["doctor-cardsubtreatments"]}>
                        <span>View all</span> 6 <span>services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={doctorsListCardStyles["doctor-cardbody2"]}>
            <div>
              <div className={doctorsListCardStyles["doctor-cardlocation"]}>
                <FontAwesomeIcon icon={faThumbsUp} style={{fontSize:"16px", verticalAlign:"-3px", marginRight:"7px", width:"21px"}}/>
                <span>90%</span>
              </div>
              <div className={doctorsListCardStyles["doctor-cardlocation"]}>
                <FontAwesomeIcon icon={faCommentAlt} style={{fontSize:"16px", verticalAlign:"-3px", marginRight:"7px", width:"21px"}}/>
                <span>4 Feedback</span>
              </div>
              <div className={doctorsListCardStyles["doctor-cardlocation"]}>
                <FontAwesomeIcon icon={faMap} style={{fontSize:"15px", verticalAlign:"-3px", marginRight:"7px", width:"21px"}}/>
                <span>East Legon, Accra</span>
              </div>
              <div className={doctorsListCardStyles["doctor-cardlocation"]}>
                <FontAwesomeIcon icon={faMoneyBillAlt} style={{fontSize:"14px", verticalAlign:"-3px", marginRight:"7px", width:"21px"}}/>
                <span>GHC 1,200</span>
              </div>
              <div className={doctorsListCardStyles["doctor-cardlocation"]}>
                <FontAwesomeIcon icon={faClock} style={{fontSize:"17px", verticalAlign:"-3px", marginRight:"7px", width:"21px"}}/>
                <span>Available Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className={doctorsListCardStyles["doctor-cardfooter"]}>
          <div className={doctorsListCardStyles["doctor-cardfootercontainer"]}>
            <div className={doctorsListCardStyles["doctor-cardfooterspace"]}>
              <div className={doctorsListCardStyles["doctor-cardfooterspacecontent"]}>
                <div></div>
              </div>
            </div>
            <div className={doctorsListCardStyles["doctor-cardfooterbuttons"]}>
              <div className={doctorsListCardStyles["doctor-cardfooterb"]}>
                <button className={doctorsListCardStyles["doctor-viewprofilebutton"]}>
                  <span>View Profile</span>
                </button>
                <button className={doctorsListCardStyles["doctor-bookappointmentbutton"]}>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsListCard;
