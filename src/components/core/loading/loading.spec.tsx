import { render, screen } from '@testing-library/react';
import Loading from './loading';

describe('Given the Loading component', () => {
    describe('When called to render', () => {
        test('It should render Loading text', () => {
            const text = 'Loading...';
            render(<Loading />);
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });
});
