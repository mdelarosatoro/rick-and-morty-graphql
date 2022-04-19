import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/core/header/header';
import Footer from './components/core/footer/footer';
import Dashboard from './components/dashboard/dashboard';
import CharacterDetails from './components/character-details/character-details';

function App() {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-200px)]">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pokemons" element={<Dashboard />} />
                    <Route
                        path="/character/:idCharacter"
                        element={<CharacterDetails />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
