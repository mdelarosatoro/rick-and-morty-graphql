function Header() {
    const navLinks = [
        {
            path: '/',
            label: 'Home',
        },
        {
            path: '/pokemons',
            label: 'Pokemons',
        },
    ];

    return (
        <header className="bg-violet-400 h-[100px] flex justify-center items-center">
            <nav>
                {navLinks.map((item) => (
                    <a href={item.path}>{item.label}</a>
                ))}
            </nav>
        </header>
    );
}

export default Header;
