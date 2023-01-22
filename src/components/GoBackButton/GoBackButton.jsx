import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

const GoBackButton = ({ backLinkHref }) => {
    return (
        <div>
            <Link to={backLinkHref}>
                <BsArrowLeftShort size={20} />
                Go back
            </Link>
        </div>
    );
};

export default GoBackButton;
