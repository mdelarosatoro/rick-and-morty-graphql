import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CharacterContext } from '../../../context/character-context';
import { mockCharacter } from '../../../mocks/characters.mocks';
import Gallery from './gallery';
import { mockLocation } from '../../../mocks/locations.mocks';
import { LocationContext } from '../../../context/location-context';

jest.mock('@apollo/client');

describe('Given the Gallery component', () => {
    describe('When showing the character gallery', () => {
        test('It should render the characters', () => {
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            const mockContext = {
                loading: false,
                error: false,
                data: { characters: { results: [mockCharacter] } },
                page: 1,
                setPage: jest.fn(),
                numOfPages: 2,
            };
            render(
                <BrowserRouter>
                    <CharacterContext.Provider value={mockContext}>
                        <Gallery type="characters" />
                    </CharacterContext.Provider>
                </BrowserRouter>
            );
            expect(screen.getByText('test')).toBeInTheDocument();
            expect(
                screen.getByText(
                    `Page: ${mockContext.page} of ${mockContext.numOfPages}`
                )
            ).toBeInTheDocument();
        });
    });
    describe('When showing the location gallery', () => {
        test('It should render the locations', () => {
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            const mockContext = {
                loading: false,
                error: false,
                data: { locations: { results: [mockLocation] } },
                page: 1,
                setPage: jest.fn(),
                numOfPages: 2,
            };
            render(
                <BrowserRouter>
                    <LocationContext.Provider value={mockContext}>
                        <Gallery type="locations" />
                    </LocationContext.Provider>
                </BrowserRouter>
            );
            expect(screen.getByText('test')).toBeInTheDocument();
            expect(
                screen.getByText(
                    `Page: ${mockContext.page} of ${mockContext.numOfPages}`
                )
            ).toBeInTheDocument();
        });
    });
    describe('When loading is true', () => {
        test('It should render the loading component', () => {
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            const mockContext = {
                loading: true,
                error: false,
                data: { locations: { results: [mockLocation] } },
                page: 1,
                setPage: jest.fn(),
                numOfPages: 2,
            };
            render(
                <BrowserRouter>
                    <LocationContext.Provider value={mockContext}>
                        <Gallery type="locations" />
                    </LocationContext.Provider>
                </BrowserRouter>
            );
            expect(screen.getByText('Loading...')).toBeInTheDocument();
        });
    });
    describe('When error is true', () => {
        test('It should render the error component', () => {
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            const mockContext = {
                loading: false,
                error: true,
                data: { locations: { results: [mockLocation] } },
                page: 1,
                setPage: jest.fn(),
                numOfPages: 2,
            };
            render(
                <BrowserRouter>
                    <LocationContext.Provider value={mockContext}>
                        <Gallery type="locations" />
                    </LocationContext.Provider>
                </BrowserRouter>
            );
            const expectedMessage =
                'We found no locations matching your criteria';
            expect(screen.getByText(expectedMessage)).toBeInTheDocument();
        });
    });
    describe('When clicking on the page buttons', () => {
        const mockedUseQuery = useQuery as jest.Mock;
        const mockContext = {
            loading: false,
            error: false,
            data: { characters: { results: [mockCharacter] } },
            page: 1,
            setPage: jest.fn(),
            numOfPages: 10,
        };
        beforeEach(() => {
            mockedUseQuery.mockReturnValue(mockContext);
            mockContext.setPage.mockImplementation(() => {
                mockContext.page += 1;
            });
        });
        test('It should call setPage when clicking on next', async () => {
            await render(
                <BrowserRouter>
                    <CharacterContext.Provider value={mockContext}>
                        <Gallery type="characters" />
                    </CharacterContext.Provider>
                </BrowserRouter>
            );
            await userEvent.click(screen.getByText('Next'));
            expect(mockContext.setPage).toHaveBeenCalled();
        });
        test('It should call setPage when clicking on prev', async () => {
            await render(
                <BrowserRouter>
                    <CharacterContext.Provider value={mockContext}>
                        <Gallery type="characters" />
                    </CharacterContext.Provider>
                </BrowserRouter>
            );
            await userEvent.click(screen.getByText('Prev'));
            expect(mockContext.setPage).toHaveBeenCalled();
        });
    });
});
