import React from 'react';

import doctorsListStyles from "./DoctorsList.module.scss";

import DoctorsListCard from "./DoctorsListCard";

const DoctorsList = () => {
  return (
    <section className={doctorsListStyles["doctorlist-wrapper"]}>
      <h2 className={doctorsListStyles["doctorlist-heading"]}>Results of doctors offering services</h2>
      <div className={doctorsListStyles["doctorlist-container"]}>
        <div className={doctorsListStyles["doctorlist-content"]}>
          <DoctorsListCard />
          <DoctorsListCard />
          <DoctorsListCard />
          <DoctorsListCard />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default DoctorsList;
