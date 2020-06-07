import { connect } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import { hideMobileNavigationMenu } from "../redux/actions/NavMenuActions";

const mapStateToProps = (state, ownProps) => {
  return {
    visibleMobileMenu: state.NavbarMenuReducer.visibleMobileMenu,
    visibleEllipsisMenu: state.NavbarMenuReducer.visibleEllipsisMenu,
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideMobileNavigationMenu: () => dispatch(hideMobileNavigationMenu())
  };
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;
