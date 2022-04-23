import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { navLinks } from './nav-links';

describe('Given the footer component', () => {
    describe('When called to render with a message as a prop', () => {
        test('It shows the message on the screen', () => {
            render(
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            );
            waitFor(() => {
                navLinks.forEach((link) => {
                    expect(screen.findByText(link.label)).toBeInTheDocument();
                });
            });
        });
    });
});
