import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Plans from './Plans';
import Classes from './Classes';
import Checkout from './Checkout';
import Trainers from './Trainers';

function App() {
    return (
        <HashRouter>
            <div className="site-shell">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/trainers" element={<Trainers />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
