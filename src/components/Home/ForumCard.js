import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

import forumCardStyles from "./ForumCard.module.scss"

const ForumCard = () => {
  return (
    <div className={forumCardStyles["forum-card"]}>
      <div className={forumCardStyles["forum-body"]}>
        <h4>{"This is my question and this is where it goes and I would love to ask a lot of questions and it would be great to get and answer".substring(0, 90) + "..."}</h4>
        <div className={forumCardStyles["forum-doc"]}>
          <img src={require("../../images/temp1.jpg")} alt="avatar" />
          <div>
            <p className={forumCardStyles["forum-docname"]}>Dr. Kweku Ofori</p>
            <p className={forumCardStyles["forum-dococcupation"]}>Gynaecologist, Kumasi</p>
          </div>
        </div>
        <div className={forumCardStyles["forum-content"]}>
          <p className={forumCardStyles["forum-contenttext"]}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'.substring(0,100) + '...'}
          </p>
          <button>READ MORE</button>
          <FontAwesomeIcon
            style={{ color: "#6c757d" }}
            icon={faBookmark}
            className={forumCardStyles["forum-icon"]}
          />
          <FontAwesomeIcon
            style={{ color: "#6c757d" }}
            icon={faHeart}
            className={forumCardStyles["forum-icon"]}
          />
        </div>
      </div>
      <div className={forumCardStyles["card-footer"]}>
        {"2 Answers"}
      </div>
    </div>
  );
}

export default ForumCard;
