import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as API from '../../API/Api';
import Movielist from "components/MovieList/MovieList";
import Loading from "components/Loading/Loading";

const MovieSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const [movies, setMovies] = useState(null);
    const [totalResultMovies, setTotalResultMovies] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const [inputSearch, setInputSearch] = useState(query);

    useEffect(() => {

        if (query === '') return;

        API.getQuery(query).then(data => {
            setMovies(null);
            setTotalResultMovies(data.total_results);
            setShowLoading(false);
        }).catch(console.log);
    }, [query]);

    const handleInputChange = evt => {
        setInputSearch(evt.currentTarget.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const queryNormalized = form.query.value.toLowerCase().trim();

        setSearchParams({ query: queryNormalized })
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    value={inputSearch}
                    onChange={handleInputChange}
                    placeholder="Write movie for search"
                />
                <button type="submit">Search</button>
            </form>

            {showLoading && <Loading />}
            {movies && <Movielist movies={movies} />}
            {totalResultMovies === 0 && <div>Not found movies</div>}

        </>
    );
};

export default MovieSearch;