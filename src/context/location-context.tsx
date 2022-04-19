import React, { createContext } from 'react';
import { useLocations } from '../hooks/useLocations';

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
