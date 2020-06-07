import React from 'react';

import categoriesStyles from "./Categories.module.scss"

import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <section className={categoriesStyles["categories-wrapper"]}>
      <h2 className={categoriesStyles["categories-heading"]}>Top Categories</h2>
      <div className={categoriesStyles["categories-container"]}>
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </section>
  );
}

export default Categories;
