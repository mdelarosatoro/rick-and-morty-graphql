import React, { createContext } from 'react';
import { useCharacters } from '../hooks/useCharacters';

export const CharacterContext = createContext<any>({});
export function CharacterContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CharacterContext.Provider value={useCharacters()}>
            {children}
        </CharacterContext.Provider>
    );
}
