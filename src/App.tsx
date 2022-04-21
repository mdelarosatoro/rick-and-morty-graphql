import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/core/header/header';
import Footer from './components/core/footer/footer';
import Dashboard from './components/dashboard/dashboard';
import CharacterDetails from './components/character-details/character-details';
import { CharacterContextProvider } from './context/character-context';
import { LocationContextProvider } from './context/location-context';
import Locations from './components/locations/locations';
import LocationDetails from './components/location-details/locations-details';
import Home from './components/home/home';

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col min-h-[calc(100vh-200px)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/characters"
                        element={
                            <CharacterContextProvider>
                                <Dashboard />
                            </CharacterContextProvider>
                        }
                    />
                    <Route
                        path="/character/:idCharacter"
                        element={<CharacterDetails />}
                    />
                    <Route
                        path="/locations"
                        element={
                            <LocationContextProvider>
                                <Locations />
                            </LocationContextProvider>
                        }
                    />
                    <Route
                        path="/location/:idLocation"
                        element={<LocationDetails />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
