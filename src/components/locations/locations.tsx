import { ChangeEvent, useContext } from 'react';
import { LocationContext } from '../../context/location-context';
import Gallery from './gallery/gallery';

function Locations() {
    const { setSearch, search, setPage } = useContext(LocationContext);

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSearch(target.value);
        setPage(1);
    };
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold underline">Locations</h1>
            <input
                value={search}
                onChange={handleChange}
                type="text"
                name=""
                id=""
                className="border-2"
            />
            <Gallery />
        </div>
    );
}

export default Locations;
