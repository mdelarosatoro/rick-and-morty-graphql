import { render, screen, waitFor } from '@testing-library/react';
import { useContext } from 'react';
import { LocationContext, LocationContextProvider } from './location-context';
import { useLocations } from '../hooks/useLocations';

jest.mock('../hooks/useLocations');
const mockUseLocations = useLocations as jest.Mock;

describe('Given the LocationContext', () => {
    describe('When wrapped around a component', () => {
        const text = 'test';
        beforeEach(() => {
            mockUseLocations.mockReturnValue(text);
        });
        test('The component can access the context', () => {
            function TestComponent() {
                const context = useContext(LocationContext);
                return <p>{JSON.stringify(context)}</p>;
            }
            render(
                <LocationContextProvider>
                    <TestComponent />
                </LocationContextProvider>
            );
            waitFor(() => {
                expect(screen.getByText(text)).toBeInTheDocument();
            });
        });
    });
});
