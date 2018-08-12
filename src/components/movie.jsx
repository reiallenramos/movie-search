import React, { Component } from 'react';

class Movie extends Component {
  state = {
    title: this.props.title,
    year: this.props.year,
    poster: this.props.poster
  }

  styles = {
    width: "16rem"
  }

  render() {
    const poster_url = this.props.poster === "N/A" ? "http://via.placeholder.com/400x540" : this.state.poster
    return(
      <div className="card m-2" style={this.styles}>
        <img className="card-img-top img-fluid" src={poster_url} alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
        </div>
      </div>
    );
  }
}

export default Movie;
