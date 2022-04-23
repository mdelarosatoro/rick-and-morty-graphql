import { render, screen, waitFor } from '@testing-library/react';
import { useContext } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import {
    CharacterContext,
    CharacterContextProvider,
} from './character-context';

jest.mock('../hooks/useCharacters');
const mockUseCharacters = useCharacters as jest.Mock;

describe('Given the CharacterContext', () => {
    describe('When wrapped around a component', () => {
        const text = 'test';
        beforeEach(() => {
            mockUseCharacters.mockReturnValue(text);
        });
        test('The component can access the context', () => {
            function TestComponent() {
                const context = useContext(CharacterContext);
                return <p>{JSON.stringify(context)}</p>;
            }
            render(
                <CharacterContextProvider>
                    <TestComponent />
                </CharacterContextProvider>
            );
            waitFor(() => {
                expect(screen.getByText(text)).toBeInTheDocument();
            });
        });
    });
});
