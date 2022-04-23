import { render, screen } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import LocationDetails from './locations-details';

jest.mock('@apollo/client');
const mockUseQuery = useQuery as jest.Mock;

describe('Given the LocationDetails component', () => {
    describe('When called to render', () => {
        const mockLocation = {
            name: 'Citadel of Ricks',
            type: 'Space station',
            dimension: 'unknown',
        };
        beforeEach(() => {
            mockUseQuery.mockReturnValue({
                loading: false,
                error: false,
                data: {
                    location: mockLocation,
                },
            });
        });
        test('It should render', () => {
            render(<LocationDetails />);
            expect(screen.getByText(mockLocation.name)).toBeInTheDocument();
            expect(screen.getByText(mockLocation.type)).toBeInTheDocument();
            expect(
                screen.getByText(mockLocation.dimension)
            ).toBeInTheDocument();
        });
    });
    describe('When loading', () => {
        const mockLocation = {
            name: 'Citadel of Ricks',
            type: 'Space station',
            dimension: 'unknown',
        };
        beforeEach(() => {
            mockUseQuery.mockReturnValue({
                loading: true,
                error: false,
                data: {
                    location: mockLocation,
                },
            });
        });
        test('It should render loading', () => {
            render(<LocationDetails />);
            expect(screen.getByText(/Loading.../)).toBeInTheDocument();
        });
    });
    describe('When an error occurs', () => {
        const mockLocation = {
            name: 'Citadel of Ricks',
            type: 'Space station',
            dimension: 'unknown',
        };
        const testErrorMessage = 'Test Error';
        beforeEach(() => {
            mockUseQuery.mockReturnValue({
                loading: false,
                error: { message: testErrorMessage },
                data: {
                    location: mockLocation,
                },
            });
        });
        test('It should render the error message', () => {
            render(<LocationDetails />);
            expect(screen.getByText(/Test Error/)).toBeInTheDocument();
        });
    });
});
