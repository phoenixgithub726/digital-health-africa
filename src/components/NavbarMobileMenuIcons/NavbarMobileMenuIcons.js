import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import navbarMobileMenuIconsStyles from "./NavbarMobileMenuIcons.module.scss";

class NavbarMobileMenuIcons extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onClickNavigationHandler = () => {
    const {
      showSideBarMenu,
      onShowMobileNavigationMenu,
      onHideMobileNavigationMenu
    } = this.props;

    showSideBarMenu
      ? onShowMobileNavigationMenu()
      : onHideMobileNavigationMenu();
  }

  ellipsisStateHandler = () => {
    const {
      visibleEllipsisMenu,
      onShowMobileEllipsisMenu,
      onHideMobileEllipsisMenu
    } = this.props;

    visibleEllipsisMenu
      ? onHideMobileEllipsisMenu()
      : onShowMobileEllipsisMenu();
  }

  onClickEllipsisHandler = () => {
    if (!this.props.visibleEllipsisMenu) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.ellipsisStateHandler();
  };

  handleOutsideClick = e => {
    const node = this.myRef.current;
    if (node.contains(e.target)) {
      return;
    }

    this.onClickEllipsisHandler();
  };

  render() {
    return (
      <div className={navbarMobileMenuIconsStyles["burger-main"]}>
        <div className={navbarMobileMenuIconsStyles["burger-container"]}>
          <div className={navbarMobileMenuIconsStyles["burger-sub-container"]}>
            <button
              className={navbarMobileMenuIconsStyles["burger-icon-link"]}
              onClick={this.onClickNavigationHandler}
            >
              <span
                className={`${navbarMobileMenuIconsStyles["burger-span-element"]} ${navbarMobileMenuIconsStyles["white-burger-icon-color"]}`}
              ></span>
            </button>
            <Link to={"/"}>
              <img src={require("../../images/logo.jpg")} alt="logo" />
            </Link>
          </div>
          <div>
            <Link to={"/login"}>
              <div className={navbarMobileMenuIconsStyles["burger-usercontainer"]}>
              <FontAwesomeIcon className={navbarMobileMenuIconsStyles["burger-usericon"]} icon={faUser} />
            </div>
            </Link>
            <div
              ref={this.myRef}
              className={navbarMobileMenuIconsStyles["ellipsis-container"]}
              onClick={this.onClickEllipsisHandler}
            >
              <span
                className={`${navbarMobileMenuIconsStyles["ellipsis-icon-element"]} ${navbarMobileMenuIconsStyles["white-burger-icon-color"]}`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMobileMenuIcons;
