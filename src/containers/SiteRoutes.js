import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "../components/Home/Home";
import Consultants from "../components/Consultants/Consultants";
import DoctorsList from "../components/Consultants/DoctorsList";
import ServiceProviders from "../components/ServiceProviders/ServiceProviders";
import { Login, MainLayout, PatientSignup, ConsultantSignup } from "../components/AppPages";

const SiteRoutes = () => {
  return (
    <Switch>
      {/* All the routes and their component to render goes here as shown below */}
      <Route exact path="/" component={Home} />
      <Route exact path="/consultants" component={Consultants} />
      <Route exact path="/consultants/:categories" component={DoctorsList} />
      <Route exact path="/service-providers" component={ServiceProviders} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/patient-signup" component={PatientSignup} />
      <Route exact path="/consultant-signup" component={ConsultantSignup} />
      <Route exact path="/app/hospital" component={MainLayout} />
      <Route
        path=""
        render={props => {
          return {
            /* component goes here. { ...props can be passed to the component to get access 
              to the history, location and match as props }*/
          };
        }}
      />
    </Switch>
  );
};

// withRouter will give us access to history, location
// and match as props to the component rendered according
// to the Route path so that it can redirect the user
// with for example this.props.history.push
export default withRouter(SiteRoutes);
