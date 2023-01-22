import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../API/Api';
import MoviesList from '../../components/MovieList/MovieList';
import Loading from '../../components/Loading/Loading';


const MovieSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const [movies, setMovie] = useState(null);
    const [totalRezultMovie, setTotalRezMovie] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const [inputSearch, setInputSearch] = useState(query);

    useEffect(() => {
        if (query === '') return;

        setMovie(null);
        setTotalRezMovie(null);
        setShowLoading(true);

        API.getMoviesQuery(query)
            .then(data => {
                setMovie(data.results);
                setTotalRezMovie(data.total_results);
                setShowLoading(false);
            })
            .catch(console.log);
    }, [query]);

    const handleInputChange = e => {
        setInputSearch(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const queryNormalized = form.query.value.toLowerCase().trim();

        setSearchParams({ query: queryNormalized });

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    value={inputSearch}
                    onChange={handleInputChange}
                    placeholder="Enter movie name"
                />

                <button type="submit">
                    Search
                </button>
            </form>

            {showLoading && <Loading />}
            {movies && <MoviesList movies={movies} />}

            {totalRezultMovie === 0 && <div>Not found movies</div>}
        </>
    );
};

export default MovieSearch;