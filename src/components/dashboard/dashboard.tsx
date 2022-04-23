import { ChangeEvent, useContext } from 'react';
import { CharacterContext } from '../../context/character-context';
import GalleryContainer from '../core/gallery-container/gallery-container';
import Gallery from '../core/gallery/gallery';
import Title from '../core/title/title';

function Dashboard() {
    const { setSearch, search, setPage } = useContext(CharacterContext);

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSearch(target.value);
        setPage(1);
    };
    return (
        <GalleryContainer>
            <Title text="Characters" />
            <input
                value={search}
                onChange={handleChange}
                type="text"
                name=""
                id=""
                className="border-2 border-violet-900 rounded-lg px-2 py-1"
            />
            <Gallery type="characters" />
        </GalleryContainer>
    );
}

export default Dashboard;
