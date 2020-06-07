import React from 'react';

import dailyTipsStyles from "./DailyTips.module.scss";

import DailyTipThumbnail from "./DailyTipThumbnail";

const DailyTips = () => {
  return (
    <section className={dailyTipsStyles["dailytip-wrapper"]}>
      {/*<h2 className="dialytip-heading">Daily Health Tips</h2>*/}
      <div className={dailyTipsStyles["dailytip-container"]}>
        <div className={dailyTipsStyles["dialytip-all"]}>
          <h3>Read dialy articles from health experts</h3>
          <div className={dailyTipsStyles["dailytip-text"]}>
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </div>
          <button className={dailyTipsStyles["dailytip-button"]}>
            See all articles
          </button>
        </div>
        <DailyTipThumbnail />
        <DailyTipThumbnail />
        <DailyTipThumbnail />
        <button className={dailyTipsStyles["dailytip-buttonresponsive"]}>
          See all articles
        </button>
      </div>
    </section>
  );
}

export default DailyTips;
