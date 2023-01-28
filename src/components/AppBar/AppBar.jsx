import { NavLink } from 'react-router-dom';
import { Header } from './AppBar.styled';


const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
    return (
        <Header>
            <nav>
                {navItems.map(({ href, text }) => (
                    <NavLink
                        key={href}
                        to={href}
                    >
                        {text}
                    </NavLink>
                ))}
            </nav>
        </Header>
    );
};

export default AppBar;