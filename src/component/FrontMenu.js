import React, { useRef } from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
function FrontMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div>
      <Grid container component="main">
        <Grid item xs={6} sm={6} md={6}>
          <Search />
        </Grid>
        <Grid className="main" item xs={6} md={6}>
          <div className="frontmenu">
            <div className="menu-container">
              <button onClick={onClick} className="menu-trigger">
                
                <img
                  class="inline-block h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                /><span>User</span>
              </button>
              <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  <li>
                    <NavLink className="navbar-item m-menu__link" to="/">
                      <PersonIcon />
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-item m-menu__link" to="/">
                      <SettingsIcon />
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-item m-menu__link" to="/">
                      <ExitToAppIcon />
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FrontMenu;
