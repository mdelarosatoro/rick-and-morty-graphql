import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/core/header/header';
import Footer from './components/core/footer/footer';
import Dashboard from './components/dashboard/dashboard';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/pokemons" element={<Dashboard />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
