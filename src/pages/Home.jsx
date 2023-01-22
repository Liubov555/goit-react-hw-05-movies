import { useEffect, useState } from "react";
import * as API from '../API/Api';
import Movielist from "components/MovieList/MovieList";

const Home = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        API.getTrendingMovies().then(data => { setMovies(data.results) }).catch(console.log);
    }, []);

    if (!movies) {
        return;
    }
    return (
        <>
            <Movielist movies={movies} titlePage={'Tranding today'} />
        </>
    );

};

export default Home;
