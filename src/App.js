import React, { Component } from "react";
import "./css/App.css";
import Search from "./components/Search";
import SearchT from "./components/SearchT";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import MovieList from "./components/MovieList";
import TVList from "./components/TVList";
import MovieInfo from "./components/MovieInfo";
import TVInfo from "./components/TVInfo";
import Buttons from "./components/Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      tv: [],
      searchTerm: "",
      currentMovie: null,
    };
  }

  /* Movies */

  handleSubmit = (e) => {
    e.preventDefault();

    const apiKey = `ac8ebff0142e84da023a75031cbfd168`;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results.splice(0, 9)] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter((movie) => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  /* TV */

  handleTvSubmit = (t) => {
    t.preventDefault();

    const apiKey = `ac8ebff0142e84da023a75031cbfd168`;

    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ tv: [...data.results.splice(0, 9)] });
      });
  };

  handleTVChange = (t) => {
    this.setState({ searchTerm: t.target.value });
  };

  viewTVInfo = (id) => {
    const filteredTV = this.state.tv.filter((tv) => tv.id === id);

    const newCurrentTV = filteredTV.length > 0 ? filteredTV[0] : null;

    this.setState({ currentTV: newCurrentTV });
  };

  closeTVInfo = () => {
    this.setState({ currentTV: null });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Buttons>
            <div label="TV Shows">
              {this.state.currentTV == null ? (
                <div>
                  <SearchT
                    handleTVChange={this.handleTVChange}
                    handleTvSubmit={this.handleTvSubmit}
                  />
                </div>
              ) : (
                <TVInfo
                  currentTV={this.state.currentTV}
                  closeTVInfo={this.closeTVInfo}
                />
              )}

              <TVList viewTVInfo={this.viewTVInfo} tv={this.state.tv} />
            </div>
            <div label="Movies">
              {this.state.currentMovie == null ? (
                <div>
                  <Search
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
                </div>
              ) : (
                <MovieInfo
                  currentMovie={this.state.currentMovie}
                  closeMovieInfo={this.closeMovieInfo}
                />
              )}

              <MovieList
                viewMovieInfo={this.viewMovieInfo}
                movies={this.state.movies}
              />
            </div>
          </Buttons>
        </div>
      </Router>
    );
  }
}

export default App;
