import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

import forumStyles from "./Forum.module.scss";

import ForumCard from "./ForumCard";

const Forum = ({ visibleModalForm, onhideModalForm, onshowModalForm }) => {

  const onClickQuestionHandler = () => {

    visibleModalForm
      ? onhideModalForm()
      : onshowModalForm();
  };

  return (
    <section className={forumStyles["forum-wrapper"]}>
      <h2 className={forumStyles["forum-heading"]}>
        Forum Questions on Health
      </h2>
      <h6 className={forumStyles["forum-subheading"]}>
        <FontAwesomeIcon
          style={{ fontSize: "1.3rem", marginRight: ".5rem" }}
          icon={faComments}
        />
        <strong>{"1 million+"} </strong>&nbsp;questions answered by doctors
      </h6>
      <div className={forumStyles["forum-container"]}>
        <ForumCard />
        <ForumCard />
        <ForumCard />
        <div className={forumStyles["forum-buttons"]}>
          <button>View more questions and answers</button>
          <button onClick={onClickQuestionHandler}>Ask a Questions</button>
        </div>
      </div>
    </section>
  );
};

export default Forum;
