import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export function useLocations() {
    const GET_LOCATIONS = gql`
        query GetLocations($page: Int, $filter: FilterLocation) {
            locations(page: $page, filter: $filter) {
                info {
                    pages
                }
                results {
                    id
                    name
                    type
                    dimension
                }
            }
        }
    `;
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [numOfPages, setNumOfPages] = useState<number>(0);
    const { loading, error, data, refetch } = useQuery(GET_LOCATIONS, {
        variables: { filter: { name: search }, page },
    });
    useEffect(() => {
        refetch({ filter: { name: search }, page });
    }, [search, page]);

    useEffect(() => {
        setNumOfPages(data?.locations?.info.pages);
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
