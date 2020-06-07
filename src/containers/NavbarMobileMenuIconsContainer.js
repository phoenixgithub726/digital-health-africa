import { connect } from "react-redux";
import {
  hideMobileNavigationMenu,
  showMobileNavigationMenu,
  hideMobileEllipsisMenu,
  showMobileEllipsisMenu,
} from "../redux/actions/NavMenuActions";

import NavbarMobileMenuIcons from "../components/NavbarMobileMenuIcons/NavbarMobileMenuIcons";

const mapStateToProps = (state, ownProps) => {
  return {
    visibleEllipsisMenu: state.NavbarMenuReducer.visibleEllipsisMenu,
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideMobileNavigationMenu: () => dispatch(hideMobileNavigationMenu()),
    onShowMobileNavigationMenu: () => dispatch(showMobileNavigationMenu()),
    onHideMobileEllipsisMenu: () => dispatch(hideMobileEllipsisMenu()),
    onShowMobileEllipsisMenu: () => dispatch(showMobileEllipsisMenu())
  };
};

const NavbarMobileMenuIconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarMobileMenuIcons);

export default NavbarMobileMenuIconsContainer;
