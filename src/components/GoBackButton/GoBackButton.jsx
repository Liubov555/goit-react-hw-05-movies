import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Container } from './GoBackButton.styled';

const GoBackButton = ({ backLinkHref }) => {
    return (
        <Container>
            <Link to={backLinkHref}>
                <BsArrowLeftShort size={20} />
                Go back
            </Link>
        </Container>
    );
};

export default GoBackButton;
