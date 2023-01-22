import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const MoviesList = ({ movies, titlePage = null }) => {
    const location = useLocation();

    return (
        <>
            {titlePage && <h2>{titlePage}</h2>}

            <ul>
                {movies.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link
                            to={`/movies/${id}`}
                            state={{ from: location }}
                        >
                            {title || name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string,
        }).isRequired
    ),
    titlePage: PropTypes.string,
};

export default MoviesList;
