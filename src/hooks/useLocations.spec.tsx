import { render, screen, waitFor } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import userEvent from '@testing-library/user-event';
import { useLocations } from './useLocations';

jest.mock('@apollo/client');
const mockUseQuery = useQuery as jest.Mock;

describe('Given the useLocations custom hook', () => {
    describe('When called,', () => {
        const mockUseQueryResult = {
            loading: 'testLoading',
            error: 'testError',
            data: 'testData',
            refetch: jest.fn(),
        };
        beforeEach(() => {
            mockUseQuery.mockReturnValue(mockUseQueryResult);
        });
        test('It should return loading, error, data, refetch, search, setSearch, page, setPage, numOfPages', () => {
            function TestComponent() {
                const {
                    loading,
                    error,
                    data,
                    refetch,
                    search,
                    setSearch,
                    page,
                    setPage,
                    numOfPages,
                } = useLocations();

                const handleRefetch = () => {
                    refetch();
                };
                const handleSetSearch = () => {
                    setSearch('test');
                };
                const handleSetPage = () => {
                    setPage(1);
                };
                return (
                    <>
                        <p>{JSON.stringify(loading)}</p>
                        <p>{JSON.stringify(error)}</p>
                        <p>{JSON.stringify(data)}</p>
                        <p>search {JSON.stringify(search)}</p>
                        <p>page {JSON.stringify(page)}</p>
                        <p>numOfPages {numOfPages}</p>
                        <button onClick={handleRefetch} type="button">
                            Refetch
                        </button>
                        <button onClick={handleSetSearch} type="button">
                            setSearch
                        </button>
                        <button onClick={handleSetPage} type="button">
                            setPage
                        </button>
                    </>
                );
            }
            render(<TestComponent />);
            waitFor(() => {
                expect(
                    screen.getByText(mockUseQueryResult.loading)
                ).toBeInTheDocument();
                expect(
                    screen.getByText(mockUseQueryResult.error)
                ).toBeInTheDocument();
                expect(
                    screen.getByText(mockUseQueryResult.data)
                ).toBeInTheDocument();
            });
            userEvent.click(screen.getByText('Refetch'));
            expect(mockUseQueryResult.refetch).toHaveBeenCalled();
            userEvent.click(screen.getByText('setSearch'));
            userEvent.click(screen.getByText('setPage'));
        });
    });
});
