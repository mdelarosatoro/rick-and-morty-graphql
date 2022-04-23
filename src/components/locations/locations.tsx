import { ChangeEvent, useContext } from 'react';
import { LocationContext } from '../../context/location-context';
import GalleryContainer from '../core/gallery-container/gallery-container';
import Gallery from '../core/gallery/gallery';
import Title from '../core/title/title';

function Locations() {
    const { setSearch, search, setPage } = useContext(LocationContext);

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSearch(target.value);
        setPage(1);
    };
    return (
        <GalleryContainer>
            <Title text="Locations" />
            <input
                value={search}
                onChange={handleChange}
                type="text"
                name=""
                id=""
                className="border-2 border-violet-900 rounded-lg px-2 py-1"
            />
            <Gallery type="locations" />
        </GalleryContainer>
    );
}

export default Locations;
