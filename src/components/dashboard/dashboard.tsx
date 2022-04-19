import { ChangeEvent, useState } from 'react';

// import { CharacterI } from '../../interfaces/character.interfaces';
// import DashboardCharacter from './dashboard-character/dashboard-character';
import Gallery from './gallery/gallery';

function Dashboard() {
    const [search, setSearch] = useState<string>('');

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSearch(target.value);
    };
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Rick and Morty GraphQL
            </h1>
            <input
                value={search}
                onChange={handleChange}
                type="text"
                name=""
                id=""
                className="border-2"
            />
            <Gallery search={search} />
        </>
    );
}

export default Dashboard;
