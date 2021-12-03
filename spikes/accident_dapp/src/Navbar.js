import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar pure-menu pure-menu-horizontal">
        <a href="#" className="pure-menu-heading pure-menu-link">Unfallbericht DApp</a>
        <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://www.technikum-wien.at/sites/default/files/logo-300x160.png" alt="" width="200" height="100"/>
        </div>
      </nav>
    );
  }
}

export default Navbar;
