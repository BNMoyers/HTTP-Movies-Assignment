import React, { useState } from 'react';
import axios from 'axios';

const initialMovie={
  id: '',  
  title: '',
  director: '',
  metascore: '',
  stars: [],
}

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);


  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    e.target.name === 'metascore' ? (value = parseInt(value,10)) : (value = value)
  setMovie({
    ...movie,
    [e.target.name]: value
  });
  };

  const handleSubmit = e => {
    e.preventDefault();
  }
    return(
      <div>
        <h2>Update Movie</h2>
        <form onSubmit={handleSubmit}>
          <input type='text'
                  name='title'
                  onChange={changeHandler}
                  placeholder ='title'
                  value={movie.title}
                  />
          <input type='text'
                  name='director'
                  onChange={changeHandler}
                  placeholder ='director'
                  value={movie.director}
                  />
        </form>
      </div>
    )
};

export default UpdateMovie


  

