import { render, screen } from '@testing-library/react';
import Title from './title';

describe('Given the title component', () => {
    describe('When called to render with a text', () => {
        test('It should render the text', () => {
            const text = 'Test';
            render(<Title text={text} />);
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });
});
