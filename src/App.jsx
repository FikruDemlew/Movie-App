import React, { use } from 'react'
import { useState, useEffect } from 'react'
import Search from './components/Search'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(`Error fetching movies:, ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }
  }

  
  useEffect(() => {
    fetchMovies();
  }, [])


  return (
    <div className='pattern'>
      <div className='wrapper'>
        <header>
          <img src='./hero.png'/>
          <h1> Find <spam className='text-gradient'>Movies</spam> That You'll Enjoy! without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className='all-movies'>
          <h2>All Movies</h2>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </section>
      </div>
    </div>
  )
}

export default App