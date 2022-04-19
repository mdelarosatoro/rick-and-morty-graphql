import { gql, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import { CharacterI } from '../../../interfaces/character.interfaces';
import DashboardCharacter from '../dashboard-character/dashboard-character';

function Gallery({ search }: { search: string }) {
    const GET_ALL_CHARACTERS = gql`
        query GetCharacters($page: Int, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
                info {
                    pages
                }
                results {
                    id
                    name
                    image
                }
            }
        }
    `;
    const [page, setPage] = useState<number>(1);
    const [numOfPages, setNumOfPages] = useState<number>(0);

    const { loading, error, data, refetch } = useQuery(GET_ALL_CHARACTERS, {
        variables: { filter: { name: search }, page },
    });

    useEffect(() => {
        refetch({ filter: { name: search }, page });
    }, [search, page]);

    useEffect(() => {
        setNumOfPages(data?.characters.info.pages);
    }, [data]);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    return (
        <>
            <div className="flex items-center justify-center flex-wrap gap-16">
                {data &&
                    data.characters.results.map((character: CharacterI) => (
                        <DashboardCharacter
                            key={character.id}
                            character={character}
                        />
                    ))}
            </div>
            <div>
                <p>
                    Page: {page} of {numOfPages}
                </p>
                <button type="button" name="prev" onClick={handleClick}>
                    Prev
                </button>
                <button type="button" name="next" onClick={handleClick}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Gallery;
