import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f412844aa93370b2cd41ce590699c2f3&page=1';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=f412844aa93370b2cd41ce590699c2f3&query=';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(FEATURED_API)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
            });
        // const moviesR = await moviesResp.json();
    }, []);

    return <div>{movies.length > 0 && movies.map(movie => <Movie key={movie.id} {...movie} />)}</div>;
}

export default App;
