import {
  SHOW_MOBILE_NAVIGATION_MENU,
  HIDE_MOBILE_NAVIGATION_MENU,
  SHOW_MOBILE_ELLIPSIS_MENU,
  HIDE_MOBILE_ELLIPSIS_MENU
} from "../actionTypes";

export function showMobileNavigationMenu() {
  return {
    type: SHOW_MOBILE_NAVIGATION_MENU
  };
}
export function hideMobileNavigationMenu() {
  return {
    type: HIDE_MOBILE_NAVIGATION_MENU
  };
}
export function showMobileEllipsisMenu() {
  return {
    type: SHOW_MOBILE_ELLIPSIS_MENU
  };
}
export function hideMobileEllipsisMenu() {
  return {
    type: HIDE_MOBILE_ELLIPSIS_MENU
  };
}
