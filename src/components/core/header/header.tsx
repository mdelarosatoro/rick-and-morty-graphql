import { Link } from 'react-router-dom';

function Header() {
    const navLinks = [
        {
            path: '/',
            label: 'Home',
        },
        {
            path: '/characters',
            label: 'Characters',
        },
    ];

    return (
        <header className="bg-violet-400 h-[100px] flex justify-center items-center">
            <nav>
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
