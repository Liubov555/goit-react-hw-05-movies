import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../API/Api';

const MovieReview = () => {
    const [movieReview, setMovieReview] = useState(null);
    const { movieID } = useParams();

    useEffect(() => {
        API.getMovieReviews(movieID).then(data => {
            setMovieReview(data);
        }).catch(console.log);
    }, [movieID]);

    if (!movieReview) { return; };

    return (
        <>
            {movieReview.length > 0 ? (
                <ul>
                    {movieReview.map(({ id, author, content }) => (
                        <li key={id}>
                            Author: <b>{author}</b>
                            <p>{content}</p>
                        </li>
                    ))}

                </ul>
            ) : (
                <div>Reviews not found</div>
            )}
        </>
    );
};

export default MovieReview;