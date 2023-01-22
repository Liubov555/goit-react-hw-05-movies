import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Movielist = ({ movies, titlePage = null }) => {
    const location = useLocation();

    return (
        <>
            {titlePage && <h1>{titlePage}</h1>}

            <ul>
                {movies.map(({ id, title, name }) => {

                    return (

                        <li key={id}>
                            <Link
                                to={`/movies/${id}`}
                                state={{ from: location }}
                            >
                                {title || name}
                            </Link>

                        </li>
                    );
                })}
            </ul>
        </>
    );
};


Movielist.prop.Types = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string
        }).isRequired
    ),
    titlePage: PropTypes.string
};

export default Movielist;