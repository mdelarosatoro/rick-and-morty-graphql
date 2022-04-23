import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LocationContext } from '../../context/location-context';
import Locations from './locations';

describe('Given the Locations component', () => {
    describe('When called to render', () => {
        test('It should render itself', () => {
            render(<Locations />);
            expect(screen.getByText('Locations')).toBeInTheDocument();
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
                <LocationContext.Provider value={mockContext}>
                    <Locations />
                </LocationContext.Provider>
            );

            userEvent.click(screen.getByRole('textbox'));
            userEvent.keyboard('t');
            expect(mockContext.setSearch).toHaveBeenCalled();
            expect(mockContext.setPage).toHaveBeenCalled();
        });
    });
});
