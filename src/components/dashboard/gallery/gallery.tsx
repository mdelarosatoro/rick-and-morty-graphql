// import { gql, useQuery } from '@apollo/client';
import { SyntheticEvent, useContext } from 'react';
import { Context } from '../../../context/context';
import { CharacterI } from '../../../interfaces/character.interfaces';
import DashboardCharacter from '../dashboard-character/dashboard-character';

function Gallery() {
    const { loading, error, data, page, setPage, numOfPages } =
        useContext(Context);

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

    if (loading) return <p className="">Loading...</p>;
    if (error) return <p>We found no characters matching your criteria</p>;

    return (
        <div className="flex flex-col gap-10 my-6">
            <div className="flex items-center justify-center flex-wrap gap-16">
                {data &&
                    data.characters.results.map((character: CharacterI) => (
                        <DashboardCharacter
                            key={character.id}
                            character={character}
                        />
                    ))}
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <p>
                    Page: {page} of {numOfPages}
                </p>
                <div className="flex gap-2 items-center justify-center">
                    <button
                        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                        type="button"
                        name="prev"
                        onClick={handleClick}
                    >
                        Prev
                    </button>
                    <button
                        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                        type="button"
                        name="next"
                        onClick={handleClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
