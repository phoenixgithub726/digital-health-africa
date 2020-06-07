import React from 'react';

import ourServicesItemThumbnailStyles from  "./OurServicesItemThumbnail.module.scss"

const OurserviceItemThumbnail = () => {
  return (
    <div className={ourServicesItemThumbnailStyles["thumbnail-item"]}>
      <article className={ourServicesItemThumbnailStyles["thumbnail-content"]}>
        <img src={require("../../images/temp.jpg")} alt="" width="280" height="200"/>
        <div className={ourServicesItemThumbnailStyles["thumbnail-body"]}>
          <div className={ourServicesItemThumbnailStyles["heading-4"]}>Cancer Care</div>
          <div className={ourServicesItemThumbnailStyles["thumbnail-text"]}>We provide modern drug therapy to manipulate.</div>
        </div>
      </article>
    </div>
  );
}

export default OurserviceItemThumbnail;
