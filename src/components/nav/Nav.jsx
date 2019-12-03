import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';

import {
  PageDefinitionPropType,
} from '~store';

import './Nav.scss';

import {ReactComponent as MenuIcon} from '~assets/icons/menu.svg';

export default function Nav({
  pages,
  children,
}) {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuItems = pages.map((p, i) =>
    <NavLink
      className="button menu-item"
      to={p.path}
      key={i}
      onClick={toggleMenu}
    >{ p.name }</NavLink>
  );

  const menu = (
    <React.Fragment>
      <h2 className="title">Exercises</h2>
      { menuItems }
    </React.Fragment>
  );

  const easing = 'cubic-bezier(0.215, 0.61,  0.355, 1)';
  const sidebarStyles = {
    sidebar: {
      transition: `transform .3s ${easing}`,
      WebkitTransition: `-webkit-transform .3s ${easing}`,
    }
  };

  return (
    <Sidebar
      sidebar={menu}
      open={open}
      onSetOpen={toggleMenu}
      rootClassName="nav"
      sidebarClassName="sidebar"
      contentClassName="content"
      styles={sidebarStyles}
    >
      <button
        className="icon-button transparent menu-toggle"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>
      { children }
    </Sidebar>
  );
}

Nav.propTypes = {
  pages: PropTypes.arrayOf(PageDefinitionPropType).isRequired,
  children: PropTypes.any.isRequired,
};

