import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Movie from './components/movie';
import Navbar from './components/navbar';
import Request from 'superagent';
import Alert from './components/alert';

class App extends Component {
  state = {
    movies: [],
    total: 0
  }

  search = (query = "") => {
    var url = `http://omdbapi.com/?apikey=47b8d641&s=${query}&r=json&plot=full`;
    Request.get(url).then((response) => {
      if (response.body.Response === "True") {
        this.setState({
          movies: response.body.Search,
          total: response.body.totalResults
        });
      } else {
        this.setState({
          movies: [],
          total: response.body.totalResults
        });
      }
    });
  }

  handleUpdateSearch = (query) => {
    this.search(query);
  }

  render() {
    let alert;
    if (this.state.total === undefined || this.state.total === 0) { }
    else { alert = <Alert type="success" message={`${this.state.total} movie/s found!`} />; }
    return (
      <React.Fragment>
        <div className="container">
          <Navbar onUpdateSearch={this.handleUpdateSearch}/>
          {alert}
          <div className="col-sm-12">
            <div className="row">
              { this.state.movies.map(movie =>
                <Movie
                  key={movie.imdbID}
                  title={movie.Title}
                  year = {movie.Year}
                  poster={movie.Poster}
                />)
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
