import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f412844aa93370b2cd41ce590699c2f3&page=1';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=f412844aa93370b2cd41ce590699c2f3&query=';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(FEATURED_API);
        // const moviesR = await moviesResp.json();
    }, []);
    const getMovies = API => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
            });
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);

            setSearchTerm('');
        }
    };

    const handleOnChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
                </form>
            </header>

            <div className="movie-container">{movies.length > 0 && movies.map(movie => <Movie key={movie.id} {...movie} />)}</div>
        </>
    );
}

export default App;
