import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import onClickOutside from 'react-onclickoutside';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ListAltIcon from "@material-ui/icons/ListAlt";
function MenuItem() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    MenuItem.handleClickOutside = () => setIsOpen(false);
  
    return (
      <li className={isOpen ? 'm-menu -active' : 'm-menu '} onClick={toggle}>
        <div> <MenuIcon className="menuIcon" /> </div>
        <ul className="m-menu__list">
        <li className="m-menu__item">
            <NavLink
              className="navbar-item m-menu__link"
              activeClassName="is-active"
              to="/Dashboard"
            >
              <HomeIcon className="menuIcon" />
              Home
            </NavLink>
          </li>
          <li className="m-menu__item">
            <NavLink
              className="navbar-item m-menu__link"
              activeClassName="is-active"
              to="/UserTable"
            >
              <PersonIcon className="menuIcon" />
              Users
            </NavLink>
          </li>
          <li className="m-menu__item">
            <NavLink
              className="navbar-item m-menu__link"
              activeClassName="is-active"
              to="/Blog"
            >
              <ListAltIcon className="menuIcon" />
              Blog
            </NavLink>
          </li>
          <li className="m-menu__item">
            <NavLink
              className="navbar-item m-menu__link"
              activeClassName="is-active"
              to="/Reports"
            >
              <EqualizerIcon className="menuIcon" />
              Reports
            </NavLink>
          </li>
        </ul>
        <ul className="toggleMenu m-menu__list"> 
         
        </ul>
      </li>
    );
  };
  
  const clickOutsideConfig = {
    handleClickOutside: () => MenuItem.handleClickOutside
  };
export default onClickOutside(MenuItem, clickOutsideConfig) 




