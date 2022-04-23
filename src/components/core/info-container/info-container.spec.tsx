import { render, screen } from '@testing-library/react';
import InfoContainer from './info-container';

describe('Given the InfoContainer component', () => {
    describe('When called to render with a label and value', () => {
        test('It should render both', () => {
            const testLabel = 'testLabel';
            const testValue = 'testValue';
            render(<InfoContainer label={testLabel} value={testValue} />);
            expect(screen.getByText(/testLabel/)).toBeInTheDocument();
            expect(screen.getByText(testValue)).toBeInTheDocument();
        });
    });
});
