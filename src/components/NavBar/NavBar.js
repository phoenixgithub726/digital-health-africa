import React from "react";
import Sticky from "react-sticky-el";
import { Link } from "react-router-dom";

import navBarStyles from "./NavBar.module.scss";

import NavBarItem from "./NavBarItem";
import TopPanel from "../../containers/TopPanelContainer";

const NavBar = ({visibleMobileMenu, visibleEllipsisMenu, onHideMobileNavigationMenu}) => {

  const handleMouseDown = e => {
    onHideMobileNavigationMenu();
    e.stopPropagation();
  };

  const navBarClass = visibleMobileMenu ? "show-menu" : "hide-menu";

  return (
    <header>
      <TopPanel active={visibleEllipsisMenu} />
      <div
        onMouseDown={handleMouseDown}
        className={`${navBarStyles["overlay-container"]} ${navBarStyles[navBarClass]}`}
      ></div>
      <Sticky
        topOffset={0}
        stickyClassName={navBarStyles["sticky-nav"]}
        className={navBarStyles["sidebar-main"]}
      >
        <div className={`${navBarStyles["sidebar-container"]} ${navBarStyles[navBarClass]}`}>
          <div
            onClick={handleMouseDown}
            className={navBarStyles["button-cross"]}
          >
            <span>
              <span className={navBarStyles["cross-1"]}></span>
              <span className={navBarStyles["cross-2"]}></span>
            </span>
          </div>
          <div>
            <Link to={"/"} className={navBarStyles["navbar-brand"]}>
              <img src={require("../../images/logo.jpg")} alt="logo" />
            </Link>
          </div>
          <aside className={navBarStyles["row"]}>
            <ul className={navBarStyles["sidebar"]}>
              <NavBarItem
                path="/"
                onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                linkText="Home"
                listClass={navBarStyles["sidebar-list"]}
                activeOnlyWhenExact={true}
                linkClass={navBarStyles}
              />
              <NavBarItem
                path="/consultants"
                onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                linkText="Consultants"
                listClass={navBarStyles["sidebar-list"]}
                activeOnlyWhenExact={true}
                linkClass={navBarStyles}
              />
              <NavBarItem
                path="/service-providers"
                onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                linkText="Service Providers"
                listClass={navBarStyles["sidebar-list"]}
                activeOnlyWhenExact={true}
                linkClass={navBarStyles}
              />
              <NavBarItem
                path="/login"
                onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                linkText="Login/Signup"
                listClass={navBarStyles["sidebar-list"]}
                activeOnlyWhenExact={true}
                linkClass={navBarStyles}
              />
            </ul>
          </aside>
        </div>
      </Sticky>
    </header>
  );
}

export default NavBar;
