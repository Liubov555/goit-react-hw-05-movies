import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AdditionalItems = [
    { href: 'cast', text: "Cast" },
    { href: 'reviews', text: 'Reviews' }
];

const Additional = ({ location }) => {
    return (
        <div>
            <h3>
                Additional information
            </h3>
            <ul>
                {AdditionalItems.map(({ href, text }) => {
                    return (
                        <li key={href} >
                            <Link to={href} state={{ from: location }}>
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

AdditionalItems.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        hash: PropTypes.string,
        state: PropTypes.bool
    }).isRequired
};

export default Additional;