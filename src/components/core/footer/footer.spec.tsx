import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Given the footer component', () => {
    describe('When called to render with a message as a prop', () => {
        test('It shows the message on the screen', () => {
            render(<Footer />);
            expect(screen.getByText(/Created by Max/i)).toBeInTheDocument();
        });
    });
});
