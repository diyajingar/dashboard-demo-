import './App.css';
import '../node_modules/tailwindcss/dist/base.css';
import '../node_modules/tailwindcss/dist/components.css';
import '../node_modules/tailwindcss/dist/utilities.css';
import '../node_modules/tailwindcss/dist/tailwind.css';
import React from "react";
import {Route , Switch} from "react-router-dom";
import LoginForm from "./screen/LoginForm"
import Dashboard from "./screen/Dashboard"
import UserTable from "./screen/UserTable"
import Blog from "./screen/Blog"
import Reports from "./screen/Reports"
import Modal from "./component/Modal"
import Calendar from "./screen/Calendar"
function App() {
  return (
    <div className="App">
      <Switch>
            <Route exact path='/' component={LoginForm}  />
            <Route exact path='/Dashboard' component={Dashboard}  />
            <Route exact path='/UserTable' component={UserTable}  activeClassName="active" />
            <Route exact path='/Modal' component={Modal}  />
            <Route exact path='/Blog' component={Blog}  />
            <Route exact path='/Reports' component={Reports}  />
            <Route exact path='/Calendar' component={Calendar}  />
        </Switch>
    </div>
  );
}

export default App;
