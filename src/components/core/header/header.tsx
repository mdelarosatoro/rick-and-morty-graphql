import { Link } from 'react-router-dom';
import { navLinks } from './nav-links';

function Header() {
    return (
        <header className="bg-violet-400 h-[100px] flex justify-center items-center">
            <nav className="flex justify-center items-center gap-x-2">
                {navLinks.map((item) => (
                    <Link key={item.label} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;
