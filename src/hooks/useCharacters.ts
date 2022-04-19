import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export function useCharacters() {
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
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [numOfPages, setNumOfPages] = useState<number>(0);
    const { loading, error, data, refetch } = useQuery(GET_ALL_CHARACTERS, {
        variables: { filter: { name: search }, page },
    });
    useEffect(() => {
        refetch({ filter: { name: search }, page });
    }, [search, page]);

    useEffect(() => {
        setNumOfPages(data?.characters?.info.pages);
    }, [data]);

    return {
        loading,
        error,
        data,
        refetch,
        search,
        setSearch,
        page,
        setPage,
        numOfPages,
    };
}
