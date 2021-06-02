import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import onClickOutside from 'react-onclickoutside';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import EventIcon from '@material-ui/icons/Event';
function MenuItem() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  MenuItem.handleClickOutside = () => setIsOpen(false);

  return (
    <>
      <div className="sidemenu">
        
        <div className="mobileMenu">
        <Link className="border-bottom" to="/Dashboard">
          <div className="logo">
            <div className="logoImage">
              <img
                class="inline-block h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </div>
            <div className="logoText">
              <h4>Logo</h4>
            </div>
          </div>
        </Link>
        <li className={isOpen ? 'm-menu -active' : 'm-menu '} onClick={toggle}>
        <div className="mobileMenuIcon"> <MenuIcon className="bar" /> </div>
        <ul className="m-menu__list">
        <li className="m-menu__item">
            <NavLink
              className="navbar-item m-menu__link"
              activeClassName="is-active"
              to="/Dashboard"
            >
              <HomeIcon className="menuIcon" />
              Dashboard
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
          <li className="m-menu__item">
            <NavLink
              className="navbar-item m-menu__link"
              activeClassName="is-active"
              to="/Calendar"
            >
              <EventIcon className="menuIcon" />
              Calendar
            </NavLink>
          </li>
        </ul>
        <ul className="toggleMenu m-menu__list"> 
         
        </ul>
      </li>
        </div>


       
      </div>
    </>
  );
}

 
const clickOutsideConfig = {
  handleClickOutside: () => MenuItem.handleClickOutside
};
export default onClickOutside(MenuItem, clickOutsideConfig) 
