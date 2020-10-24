import React from 'react';
import './App.css';
import axios from "axios";
//Install axios to connect to backend 

//This class will fetch all the movies from backend api based on search(input)
//Example: If I search for avatar, it will give all data related to that text

class App extends React.Component {
    //Initialized home page with avatar movie
    //Initial state of hook is with avatar movie
  state = {
      moviesList: ['tt0499549'],
      searchTerm: ''
  };
  search = event => {
      event.preventDefault();
      //fetching data from backend
      axios
          .get(
              `http://localhost:5000/moviesearch/${
                  this.state.searchTerm
              }`
          )
          .then(res => res.data)
          .then(res => {
              if (!res.Search) {
                  this.setState({ moviesList: [] });
                  return;
              }
              const moviesList = res.Search.map(movie => movie.imdbID);
              this.setState({
                  moviesList
              });
          });
  };
// eventHandler to change
  handleChange = event => {
      this.setState({
          searchTerm: event.target.value
      });
      
  };

  render() {
      const { moviesList } = this.state;
      //Return movie list 
      return (
          //Search Button
              <div>
              <form onSubmit={this.search}>
              <div className="search-box">
                  <input className="search-input"
                      placeholder="Search for a movie"
                      onChange={this.handleChange}
                  />   
              </div>
              </form>
            
              {moviesList.length > 0 ? (
                  moviesList.map(movie => (
                      <MovieCard movieID={movie} key={movie} />
                  ))
              ) : (
                  <p>
                      Couldn't find any movie. Please search again using
                      another search criteria.
                  </p>
              )}
          </div>
      );
  }
}


class MovieCard extends React.Component {
  state = {
      movieData: {}
  };
  componentDidMount() {
      axios
          .get(
            `http://localhost:5000/moviesearch/movielist/${
              this.props.movieID
          }&plot=short`)
          .then(res => res.data)
          .then(res => {
              this.setState({ movieData: res });
          });
  }

  viewMovie() {
    window.open("http://www.imdb.com/find?s=tt&q=" + this.props.movieID,"_blank")
  }

  render() {
      const {
          Title,
          Released,
          Genre,
          Plot,
          Poster,
          imdbRating
      } = this.state.movieData;

      if (!Poster || Poster === 'N/A') {
          return null;
      }

      return (
        
          <div className="movie-card-container">
              <div className="image-container">
                  <div
                      className="bg-image"
                      style={{ backgroundImage: `url(${Poster})` }}
                  />
              </div>

              <div className="movie-info">
                  <h2>Movie Details</h2>

                  <div>
                      <h1>{Title}</h1>
                      <small>Released Date: {Released}</small>
                  </div>

                  <h4>Rating: {imdbRating} / 10</h4>

                  <input type="button"onClick={this.viewMovie.bind(this)} value="view"></input>

                  <p>{Plot}</p>

                  <div className="tags-container">
                      {Genre && Genre.split(', ').map(g => <span>{g}</span>)}
                  </div>
              </div>
          </div>
      );
  }
}



export default App;



