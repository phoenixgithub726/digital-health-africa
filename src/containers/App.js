import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "../redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import SiteMainRoutes from "./SiteMainRoutes";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <SiteMainRoutes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
