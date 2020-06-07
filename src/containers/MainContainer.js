import React from "react";
import NavbarMobileMenuIconsContainer from "./NavbarMobileMenuIconsContainer";
import NavBarContainer from "./NavBarContainer";
import Footer from '../components/Footer/Footer';
import SiteRoutes from './SiteRoutes';

const MainContainer = () => {
  return (
      <>
        <NavbarMobileMenuIconsContainer showSideBarMenu/>
        <NavBarContainer />
        <SiteRoutes />
        <Footer />
      </>
  )
}
export default MainContainer;
