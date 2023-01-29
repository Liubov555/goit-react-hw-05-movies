
import { Header, Navigation } from './AppBar.styled';


const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
    return (
        <Header>
            <nav>
                {navItems.map(({ href, text }) => (
                    <Navigation
                        key={href}
                        to={href}
                    >
                        {text}
                    </Navigation>
                ))}
            </nav>
        </Header>
    );
};

export default AppBar;