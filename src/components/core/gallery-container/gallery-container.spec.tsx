import { render, screen } from '@testing-library/react';
import GalleryContainer from './gallery-container';

describe('Given the GalleryContainer component', () => {
    describe('When called to render with children inside', () => {
        test('It should render a div outside the child component', () => {
            const text = 'Hello';
            render(
                <GalleryContainer>
                    <p>{text}</p>
                </GalleryContainer>
            );
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });
});
