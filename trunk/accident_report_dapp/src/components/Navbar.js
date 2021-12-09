import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <img src="https://www.technikum-wien.at/sites/default/files/logo-300x160.png" alt="" width="200" height="100"/>
        <div className="py-5 text-center">
          <a href="#" className="pure-menu-heading pure-menu-link">Europäischer Unfallbericht</a>
        </div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">benutzte Wallet-Adresse: {this.props.account}</span></small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
