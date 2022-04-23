import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Given the Home component', () => {
    describe('When called to render', () => {
        test('It should render', () => {
            render(<Home />);
            expect(
                screen.getByText('Rick and Morty GraphQL')
            ).toBeInTheDocument();
        });
    });
});
