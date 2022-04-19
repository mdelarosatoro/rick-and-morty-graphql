import React, { createContext } from 'react';
import { useCharacters } from '../hooks/useCharacters';

export const Context = createContext<any>({});
export function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <Context.Provider value={useCharacters()}>{children}</Context.Provider>
    );
}
