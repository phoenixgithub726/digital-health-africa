import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import healthVideoCardStyles from "./HealthVideoCard.module.scss";

const HealthVideoCard = () => {
  return (
    <div title="Kidney Disorders and coronary artery disease - Dr. Thomas Domfeh" className={healthVideoCardStyles["video-card"]}>
      <div className={healthVideoCardStyles["video-overlay"]}></div>
      <div className={healthVideoCardStyles["video-label"]}>Kidney Disorders and coronary artery disease</div>
      <div className={healthVideoCardStyles["video-docinfo"]}>
        <div className={healthVideoCardStyles["video-docimage"]}>
          <img src={require("../../images/temp1.jpg")} alt="avatar"/>
        </div>
        <div className={healthVideoCardStyles["video-docdetails"]}>
          <div className={healthVideoCardStyles["video-docname"]}>
            Dr. Thomas Domfeh
          </div>
          <div className={healthVideoCardStyles["video-docposition"]}>
            Psychiatrist, Accra
          </div>
        </div>
      </div>
      <img src={require("../../images/temp.jpg")} alt="video pic" height="200"/>
      <FontAwesomeIcon className={healthVideoCardStyles["healthvideo-icon"]} icon={faPlayCircle} />
    </div>
  );
}

export default HealthVideoCard;
