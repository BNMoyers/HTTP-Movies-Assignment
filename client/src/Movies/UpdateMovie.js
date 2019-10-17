import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateMovie = props => {
  console.log('movies', props)
  const [movie, setMovie] = useState(initialMovie);

  useEffect(() => {
    const movieToEdit = props.movies.find(
      movie => `${movie.id}`===props.match.params.id
    )

    if (movieToEdit) setMovie(movieToEdit);
  }, [props.movies, props.match.params.id]);

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "metascore") {
      value = parseInt(value, 10);
    } else if (e.target.name === "stars") {
      value = e.target.value.split(",");
    } 
    
    setMovie({
      ...movie,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(res => {
      props.movies.updateMovies([...props,res.data]);
    })
    .catch(err => console.log(err.response))
    props.history.push("/")
  };
  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={movie.title}
        />
        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="director"
          value={movie.director}
        />
        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="metascore"
          value={movie.matascore}
        />
        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars (separate with comma)"
          value={movie.stars}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
