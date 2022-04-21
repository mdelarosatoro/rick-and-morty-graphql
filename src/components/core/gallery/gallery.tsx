import { SyntheticEvent, useContext } from 'react';
import { CharacterContext } from '../../../context/character-context';
import { LocationContext } from '../../../context/location-context';
import { CharacterI } from '../../../interfaces/character.interfaces';
import { LocationI } from '../../../interfaces/location.interfaces';
import Error from '../error/error';
import Loading from '../loading/loading';
import Pagination from '../pagination/pagination';
import CharacterItem from './character-item/character-item';
import LocationItem from './location-item/location-item';

function Gallery({ type }: { type: string }) {
    const { loading, error, data, page, setPage, numOfPages } =
        type === 'characters'
            ? useContext(CharacterContext)
            : useContext(LocationContext);

    const handleClick = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        if (target.name === 'prev') {
            if (page > 1) setPage(page - 1);
        }
        if (target.name === 'next') {
            if (page < numOfPages) {
                setPage(page + 1);
            }
        }
    };

    if (loading) return <Loading />;
    if (error)
        return <Error message={`We found no ${type} matching your criteria`} />;

    return (
        <div className="flex flex-col gap-10 my-6">
            <div className="flex items-center justify-center flex-wrap gap-16">
                {type === 'characters' &&
                    data &&
                    data.characters.results.map((character: CharacterI) => (
                        <CharacterItem
                            key={character.id}
                            character={character}
                        />
                    ))}
                {type === 'locations' &&
                    data &&
                    data.locations.results.map((location: LocationI) => (
                        <LocationItem key={location.id} location={location} />
                    ))}
            </div>
            <Pagination
                page={page}
                numOfPages={numOfPages}
                handleClick={handleClick}
            />
        </div>
    );
}

export default Gallery;
