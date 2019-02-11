import React from 'react';

const Header = ({ children, className }) => {
  return (
    <header className={`app-header ${className}`}>
      { children }
    </header>
  );
};

export default Header;
