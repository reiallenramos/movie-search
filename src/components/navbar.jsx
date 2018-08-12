import React, { Component } from 'react';

class Navbar extends Component {
  getQueryString(){
    return this.refs.query.value;
  };

  render() {
    return(
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Movie List</a>
          <form className="form-inline">
            <input
              ref="query" onChange={()=> this.props.onUpdateSearch(this.getQueryString()) }
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search a movie"
              aria-label="Search" />
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
