import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { MainLayout } from "../components/AppPages";
import MainContainer from "./MainContainer";

const SiteMainRoutes = () => {
  return (
    <Switch>
      {/* All the routes and their component to render goes here as shown below */}
      <Route exact path="/" component={MainContainer} />
      <Route exact path="/consultants" component={MainContainer} />
      <Route exact path="/consultants/:categories" component={MainContainer} />
      <Route exact path="/service-providers" component={MainContainer} />
      <Route exact path="/login" component={MainContainer} />
      <Route exact path="/patient-signup" component={MainContainer} />
      <Route exact path="/consultant-signup" component={MainContainer} />
      <Route exact path="/app/hospitals" component={MainLayout} />
      <Route path="/app/patients/:id" component={MainLayout} />
      <Route exact path="/app/consultants/:id" component={MainLayout} />
      <Route exact path="/app/testrouting" component={MainLayout} />
      <Route exact path="/app/notfound" component={MainLayout} />
      <Route
        path=""
        render={props => {
          return <h5>Page Not Found. It is under fast development</h5>;
          /* component goes here. { ...props can be passed to the component to get access 
              to the history, location and match as props }*/
        }}
      />
    </Switch>
  );
};

// withRouter will give us access to history, location
// and match as props to the component rendered according
// to the Route path so that it can redirect the user
// with for example this.props.history.push
export default withRouter(SiteMainRoutes);
