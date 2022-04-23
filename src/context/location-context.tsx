import React, { createContext } from 'react';
import { useLocations } from '../hooks/useLocations';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LocationContext = createContext<any>({});
export function LocationContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LocationContext.Provider value={useLocations()}>
            {children}
        </LocationContext.Provider>
    );
}
