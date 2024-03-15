import React from 'react';
import './Navigation.css';
import { navLinkData } from '../../constants/navLink';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Navigation = () => {
  return (
    <nav className="navigation">
      {
        navLinkData.map((link, index) => (
          <NavigationLink key={index} url={link.url} text={link.text} />
        ))
      }
    </nav>
  )
}
