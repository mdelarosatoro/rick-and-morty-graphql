import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LocationItem from './location-item';

describe('Given the LocationItem component', () => {
    describe('When called to render with a valid character', () => {
        test('It should display the character info', () => {
            const mockLocation = {
                id: 'test',
                name: 'test',
                type: 'test',
                dimension: 'test',
            };
            render(
                <BrowserRouter>
                    <LocationItem location={mockLocation} />
                </BrowserRouter>
            );
            waitFor(() => {
                expect(screen.getByText('test')).toBeInTheDocument();
            });
        });
    });
});
