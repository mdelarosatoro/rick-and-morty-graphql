import { prettyDOM, render, screen } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import CharacterDetails from './character-details';

jest.mock('@apollo/client');
const mockUseQuery = useQuery as jest.Mock;

describe('Given the CharacterDetails component', () => {
    describe('When called to render', () => {
        const mockCharacter = {
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: 'test',
            gender: 'Male',
            origin: {
                name: 'Earth (C-137)',
            },
        };
        beforeEach(() => {
            mockUseQuery.mockReturnValue({
                loading: false,
                error: false,
                data: {
                    character: mockCharacter,
                },
            });
        });
        test('It should render', () => {
            render(<CharacterDetails />);
            expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
            expect(screen.getByText(mockCharacter.status)).toBeInTheDocument();
            expect(screen.getByText(mockCharacter.species)).toBeInTheDocument();
            expect(screen.getByText(mockCharacter.type)).toBeInTheDocument();
            expect(screen.getByText(mockCharacter.gender)).toBeInTheDocument();
            expect(
                screen.getByText(mockCharacter.origin.name)
            ).toBeInTheDocument();
        });
    });
    describe('When loading', () => {
        const mockLocation = {
            name: 'Citadel of Ricks',
            type: 'Space station',
            dimension: 'unknown',
        };
        beforeEach(() => {
            mockUseQuery.mockReturnValue({
                loading: true,
                error: false,
                data: {
                    location: mockLocation,
                },
            });
        });
        test('It should render loading', () => {
            render(<CharacterDetails />);
            expect(screen.getByText(/Loading.../)).toBeInTheDocument();
        });
    });
    describe('When an error occurs', () => {
        const mockLocation = {
            name: 'Citadel of Ricks',
            type: 'Space station',
            dimension: 'unknown',
        };
        const testErrorMessage = 'Test Error';
        beforeEach(() => {
            mockUseQuery.mockReturnValue({
                loading: false,
                error: { message: testErrorMessage },
                data: {
                    location: mockLocation,
                },
            });
        });
        test('It should render the error message', () => {
            render(<CharacterDetails />);
            expect(screen.getByText(/Test Error/)).toBeInTheDocument();
        });
    });
});
