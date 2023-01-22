import { Suspense, useEffect, useState } from "react";
import * as API from '../API/Api';
import { useParams } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";

import Additional from "components/Additional/Additional";
import MovieInfo from "components/MovieInfo/MovieInfo";
import Loading from "components/Loading/Loading";
import GoBackButton from "components/GoBackButton/GoBackButton";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieID } = useParams();

    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        API.getMovieById(movieID).then(data => {
            setMovie(data);
        }).catch(console.log);
    }, [movieID]);

    if (!movie) {
        return;
    }

    return (
        <>
            <GoBackButton backLink={backLink} />
            <MovieInfo movie={movie} />
            <Additional location={backLink} />

            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    );

};

export default MovieDetails;