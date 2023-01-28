import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Title, Item } from './Additional.styled';


const AdditionalItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
];

const Additional = ({ location }) => {
    return (
        <div>
            <Title>Addititonal information</Title>
            <ul>
                {AdditionalItems.map(({ href, text }) => (
                    <Item key={href}>
                        <Link to={href} state={{ from: location }}>
                            {text}
                        </Link>
                    </Item>
                ))}
            </ul>
            <hr />
        </div>
    );
};

AdditionalItems.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        hash: PropTypes.string,
        state: PropTypes.bool,
    }).isRequired,
};

export default Additional;