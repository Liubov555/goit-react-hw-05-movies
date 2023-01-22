import { NavLink } from 'react-router-dom';


const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
    return (
        <header>
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
        </header>
    );
};

export default AppBar;