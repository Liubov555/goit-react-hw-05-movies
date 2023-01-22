import { Link } from "react-router-dom";
import { BsArrowLeftShort } from 'react-icons/bs';

const GoBackButton = ({ backLink }) => {
    return (
        <div>
            <Link to={backLink}>
                <BsArrowLeftShort size={20} />
                Go back
            </Link>
        </div>
    );
};

export default GoBackButton;