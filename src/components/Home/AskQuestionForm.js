import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

import AskQuestionFormStyles from "./AskQuestionForm.module.scss";

const AskQuestionForm = ({ visibleModalForm, onHideModalForm }) => {
  console.log(visibleModalForm);
  const modalClass = visibleModalForm ? "show-modal" : "hide-modal";

  const handleMouseDown = e => {
    onHideModalForm();
    e.stopPropagation();
  };

  return (
    <div>
      <div
        onMouseDown={handleMouseDown}
        className={`${AskQuestionFormStyles["overlay-container"]} ${AskQuestionFormStyles[modalClass]}`}
      ></div>
      <div className={`${AskQuestionFormStyles["modal-content"]} ${AskQuestionFormStyles[modalClass]}`}>
        <div className={AskQuestionFormStyles["modal-header"]}>
          <div>
            <h4 className={AskQuestionFormStyles["modal-title"]}>
            <FontAwesomeIcon
              style={{ fontSize: "20px", marginRight: ".3rem" }}
              icon={faComments}
            />{" "}Ask a Question </h4>
            <span className={AskQuestionFormStyles["modal-lead"]}>Get your questions answered by <b>expert doctors</b></span>
          </div>
          <span onClick={handleMouseDown} className={AskQuestionFormStyles["close"]}>
            &times;
          </span>
        </div>
        <div className={AskQuestionFormStyles["modal-body"]}>
          <textarea className={AskQuestionFormStyles["modal-textarea"]} />
        </div>
        <div className={AskQuestionFormStyles["modal-footer"]}>
          <button className={AskQuestionFormStyles["modal-button"]}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionForm;
