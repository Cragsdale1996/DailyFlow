import React from "react";
import { Route, Switch } from 'react-router-dom';

import SideBar         from "./components/sidebar";
import DailyView       from "./pages/daily-view";
import ConfigView      from "./pages/config-view";
import InTheMomentView from "./pages/in-the-moment-view";
import WorkSessionView from "./pages/work-session-view";

import "./index.css"

export default class App extends React.Component {

  render() {
    return (
      <div className="container-fluid px-0 app-container">

        <div className="row no-gutters">

          <div className="col-md-2">
            <SideBar />
          </div>

          <div className="col-md-10">
            <div className="container content-container">
              <Switch>
                <Route path="/config"        component={ConfigView}      exact />
                <Route path="/in-the-moment" component={InTheMomentView} exact />
                <Route path="/work"          component={WorkSessionView} exact />
                <Route path="/"              component={DailyView}             />
              </Switch>
            </div>
          </div>

        </div>

      </div>
    );
  }

}

