import React from 'react';


function Nav(props) {
  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
  );
}

export default Nav;