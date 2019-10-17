import React, { useState } from 'react';
import axios from 'axios';

const initialMovie={
  id: null,  
  title: '',
  director: '',
  metascore: null,
  stars: [],
}

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);
}

const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name )
}

