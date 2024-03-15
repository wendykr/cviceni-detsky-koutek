import React from 'react';
import './NavigationLink.css';
import { NavLink } from 'react-router-dom';

export const NavigationLink = ({ url, text }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive ? "navigation__link active--nav" : "navigation__link"
      }
    >{text}</NavLink>
  )
}
