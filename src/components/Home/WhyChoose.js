import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faNotesMedical,
  faClock
} from "@fortawesome/free-solid-svg-icons";

import "./WhyChoose.scss";

const WhyChoose = () => {
  return (
    <section className="whychoose-wrapper">
      <div className="whychoose-container">
        <h2 className="whychoose-header">Why Choose DHA</h2>
        <p className="whychoose-subtext">
          Here are a few reasons why you should choose DHA:
        </p>
        <div className="whychoose-row">
          <div className="whychoose-body">
            <article>
              <div>
                <FontAwesomeIcon
                  style={{ fontSize: "70px", color: "#3DB6D3" }}
                  icon={faUserMd}
                />
              </div>
              <div className="whychoose-title">
                Professional Health Services
              </div>
              <div className="whychoose-text">
                We have on board nationally certified health care personnels and
                institutions.
              </div>
            </article>
          </div>
          <div className="whychoose-body">
            <article>
              <div>
                <FontAwesomeIcon
                  style={{ fontSize: "70px", color: "#3DB6D3" }}
                  icon={faNotesMedical}
                />
              </div>
              <div className="whychoose-title">Centralized health data</div>
              <div className="whychoose-text">
                We help you keep track of all your health vitals and past
                medical history.
              </div>
            </article>
          </div>
          <div className="whychoose-body">
            <article>
              <div>
                <FontAwesomeIcon
                  style={{ fontSize: "70px", color: "#3DB6D3" }}
                  icon={faClock}
                />
              </div>
              <div className="whychoose-title">24 hour Support</div>
              <div className="whychoose-text">
                We provide extensive medical support and healthcare services
                24/7.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
