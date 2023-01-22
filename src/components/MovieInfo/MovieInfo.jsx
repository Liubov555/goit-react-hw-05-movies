import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {
    const {
        title,
        name,
        overview,
        genres,
        release_date,
        first_air_date,
        poster_path,
        vote_average,
    } = movie;

    const userScore = Math.random(vote_average * 10);

    const imgNotFound = 'https://bitsofco.de/content/images/2018/12/broken-1.png'
    const imgUrl = poster_path ? 'https://image.tmdb.org/t/p/w500${poster_path}' : imgNotFound;

    return (
        <>
            <div>
                <img
                    src={imgUrl}
                    alt={title || name}
                    width="200"
                />
                <div>

                    <h2>
                        {title || name} ({(first_air_date || release_date).slice(0, 4)})
                    </h2>

                    <p>User Score: {userScore}%</p>

                    <h3>Overview</h3>
                    <p>{overview}</p>

                    <h3>
                        Genres
                    </h3>
                    <p>
                        {genres.map(({ name }) => name).join(', ')}
                    </p>
                </div>
            </div>
        </>
    );

};

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            })),
        release_date: PropTypes.string.isRequired,
        first_air_date: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average: PropTypes.number.isRequired
    }).isRequired
};

export default MovieInfo;