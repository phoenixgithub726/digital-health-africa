import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import mainSearchBox from "./MainSearchBox.module.scss";

const MainSearchBox = () => {
  return (
    <section className={mainSearchBox["hero-container"]}>
      <div className={mainSearchBox["hero-wrapper"]}>
        <img
          alt="search bar background"
          src={require("../../images/hero-image.jpg")}
          className={mainSearchBox["hero-image"]}
        />
        <div className={mainSearchBox["mainsearch-container"]}>
          <div className={mainSearchBox["mainsearch-wrapper"]}>
            <h1 className={mainSearchBox["mainsearch-title"]}>
              Get <b>professional</b> medical advice from <b>expert doctors</b>
            </h1>
            <div className={mainSearchBox["searchbox-container"]}>
              <div className={mainSearchBox["searchbox-input"]}>
                <input
                  placeholder="Search any health keyword Eg. 'Asthma'"
                  type="text"
                />
              </div>
              <div className={mainSearchBox["searchbox-button"]}>
                <button>
                  <b>
                    <FontAwesomeIcon
                      className={mainSearchBox["searchbox-icon"]}
                      icon={faSearch}
                    />
                    &nbsp; Search
                  </b>
                </button>
              </div>
            </div>
            <br />
            <div className={mainSearchBox["searchbox-links"]}>
              <span>Trending Topics:</span>
              <Link to="">Diabetes</Link>
              <Link to="">Infertility</Link>
              <Link to="">Hypertension</Link>
              <Link to="">Acne</Link>
              <Link to="">Cold</Link>
              <Link to="">Cough</Link>
              <Link to="">Headache</Link>
              <Link to="">Jaundice</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSearchBox;
