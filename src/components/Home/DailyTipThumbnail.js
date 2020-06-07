import React from 'react';

import dailyTipThumbnailStyles from "./DailyTipThumbnail.module.scss";

const DailyTipThumbnail = () => {
  return (
    <div className={dailyTipThumbnailStyles["dailytip-card"]}>
      <div className={dailyTipThumbnailStyles["dailytip-imageoverlay"]}>
        <img src={require("../../images/temp.jpg")} alt="Card Img" />
      </div>
      <div className={dailyTipThumbnailStyles["dailytip-body"]}>
        <div className={dailyTipThumbnailStyles["dailytip-tag"]}>
         {" Vitamins and Supplements"}
        </div>
        <div className={dailyTipThumbnailStyles["dailytip-title"]}>
          <h6>{"3 Fruits to boost your thinking"}</h6>
        </div>
        <div className={dailyTipThumbnailStyles["dailytip-doc"]}>
          {"Dr. Ben Carson"}
        </div>
      </div>
    </div>
  );
}

export default DailyTipThumbnail;
