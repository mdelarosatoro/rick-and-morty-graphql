import { Link } from 'react-router-dom';
import { navLinks } from './nav-links';

function Header() {
    return (
        <header className="bg-violet-400 h-[100px] flex justify-between items-center px-10 sm:px-20">
            <div className="w-14">
                <img src="./graphql.png" alt="" />
            </div>
            <nav className="flex justify-center items-center gap-x-4 sm:gap-x-6">
                {navLinks.map((item) => (
                    <Link
                        className="text-white text-lg sm:text-xl hover:text-gray-800 transition-all"
                        key={item.label}
                        to={item.path}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;
