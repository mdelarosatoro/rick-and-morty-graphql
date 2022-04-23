import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharacterContext } from '../../context/character-context';
import Dashboard from './dashboard';

describe('Given the Dashboard component', () => {
    describe('When called to render', () => {
        test('It should render itself', () => {
            render(<Dashboard />);
            expect(screen.getByText('Characters')).toBeInTheDocument();
        });
    });
    describe('When typing on the input', () => {
        test('It should call setSearch and setPage', () => {
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            const mockContext = {
                setSearch: jest.fn(),
                search: '',
                setPage: jest.fn(),
            };
            render(
                <CharacterContext.Provider value={mockContext}>
                    <Dashboard />
                </CharacterContext.Provider>
            );

            userEvent.click(screen.getByRole('textbox'));
            userEvent.keyboard('t');
            expect(mockContext.setSearch).toHaveBeenCalled();
            expect(mockContext.setPage).toHaveBeenCalled();
        });
    });
});
