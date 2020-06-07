import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Hospital, TestPage, Patient, Consultant } from "../";



const AppRoutes = (props) => {
  return (
    <Switch>
      {/* All the routes and their component to render goes here as shown below */}
      <Route exact path="/app/hospitals" component={Hospital} />
      <Route exact path="/app/testrouting" component={TestPage} />
      <Route exact path="/app/patients/:id" component={Patient} />
      <Route exact path="/app/consultants/:id" component={Consultant} />
      <Route
        path=""
        render={props => {
          return <h5>Page Not Found. It is under fast development</h5>;
        }}
      />
    </Switch>
  );
};

// withRouter will give us access to history, location
// and match as props to the component rendered according
// to the Route path so that it can redirect the user
// with for example this.props.history.push
export default withRouter(AppRoutes);
