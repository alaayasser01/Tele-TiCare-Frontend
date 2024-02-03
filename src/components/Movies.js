import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/movies')
      .then((res) => {
        console.log(res.data)
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container m-3">
      <div className="row">
        {movies.map((movie, id) => (
          <div className="col-md-3" key={id}>
            <div className="card mb-4">
              <div className="card-body">
                <Link  className="card-title" to={{ pathname: `/testfirst/${movie.id}`, state: { movie } }}>
                <h5 >{movie.title}</h5>
                </Link>
                <p className="card-text">
                  This is a {movie.genre} movie, the rating is {movie.rating}, {movie.year}
                </p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
