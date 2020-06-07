import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const NavBarItem = ({ linkText, onHideMobileNavigationMenu, path, linkClass, listClass, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path,
    exact: activeOnlyWhenExact
  });

  const onClickHandler = () => {
    onHideMobileNavigationMenu && onHideMobileNavigationMenu();
  };

  return (
    <li className={listClass}>
      <NavLink
        to={path}
        className={linkClass[match ? "active" : "sidebar-link"]}
        onClick={onClickHandler}
      >
        {linkText}
      </NavLink>
    </li>
  );
};

export default NavBarItem;
