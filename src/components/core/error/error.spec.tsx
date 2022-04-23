import { render, screen, waitFor } from '@testing-library/react';
import Error from './error';

describe('Given the error component', () => {
    describe('When called to render with a message as a prop', () => {
        test('It shows the message on the screen', () => {
            const message = 'test';
            render(<Error message={message} />);
            waitFor(() => {
                expect(screen.findByText(message)).toBeInTheDocument();
            });
        });
    });
});
