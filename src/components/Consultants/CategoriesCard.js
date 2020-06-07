import React from 'react';

import {Link} from "react-router-dom";

import categoriesCardStyles from "./CategoriesCard.module.scss"

const CategoriesCard = () => {
  return (
    <Link className={categoriesCardStyles["categories-link"]} to={"/consultants/nutritionist"}>
      <div className={categoriesCardStyles["categories-card"]}>
        <div className={categoriesCardStyles["categories-overlay"]}></div>
        <div className={categoriesCardStyles["categories-label"]}>Nutritionist</div>
        <img src={require("../../images/temp.jpg")} alt="category pic" height="200"/>
      </div>
    </Link>
  );
}

export default CategoriesCard;
