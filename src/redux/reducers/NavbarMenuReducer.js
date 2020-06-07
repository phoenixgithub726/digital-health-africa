import {
  SHOW_MOBILE_NAVIGATION_MENU,
  HIDE_MOBILE_NAVIGATION_MENU,
  SHOW_MOBILE_ELLIPSIS_MENU,
  HIDE_MOBILE_ELLIPSIS_MENU
} from "../actionTypes";

const DEFAULT_STATE = {
  visibleMobileMenu: false,
  visibleEllipsisMenu: false
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SHOW_MOBILE_NAVIGATION_MENU:
      return { ...state, visibleMobileMenu: true };
    case HIDE_MOBILE_NAVIGATION_MENU:
      return { ...state, visibleMobileMenu: false };
    case SHOW_MOBILE_ELLIPSIS_MENU:
      return { ...state, visibleEllipsisMenu: true };
    case HIDE_MOBILE_ELLIPSIS_MENU:
      return { ...state, visibleEllipsisMenu: false };
    default:
      return state;
  }
};
