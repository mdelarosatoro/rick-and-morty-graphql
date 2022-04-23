import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterItem from './character-item';

describe('Given the CharacterItem component', () => {
    describe('When called to render with a valid character', () => {
        test('It should display the character info', () => {
            const mockCharacter = {
                id: 'test',
                name: 'test',
                image: 'test',
            };
            render(
                <BrowserRouter>
                    <CharacterItem character={mockCharacter} />
                </BrowserRouter>
            );
            waitFor(() => {
                expect(screen.getAllByText('test')).toHaveLength(3);
            });
        });
    });
});
