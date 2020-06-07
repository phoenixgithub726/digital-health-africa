import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import moreVideosStyles from "./MoreVideos.module.scss"

const MoreVideos = () => {
  return (
    <div className={moreVideosStyles["morevideos-card"]}>
      <div className={moreVideosStyles["morevideos-container"]}>
        <FontAwesomeIcon className={moreVideosStyles["morevideos-icon"]} icon={faPlay} />
        <div className={moreVideosStyles["morevideos-text"]}>See more videos</div>
        <button className={moreVideosStyles["morevideos-button"]}>See more</button>
      </div>
    </div>
  );
}

export default MoreVideos;
