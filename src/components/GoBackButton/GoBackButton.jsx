// import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Container, LinkItem } from './GoBackButton.styled';

const GoBackButton = ({ backLinkHref }) => {
    return (
        <Container>
            <LinkItem to={backLinkHref}>
                <BsArrowLeftShort size={20} />
                Go back
            </LinkItem>
        </Container>
    );
};

export default GoBackButton;
