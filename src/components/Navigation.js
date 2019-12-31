import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="text-dark">
          {this.props.title}
        </a>
      </nav>
    );
  }
}

export default Navigation;
