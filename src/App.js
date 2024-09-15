import './App.css';
import './styles/utilities.css';

import Header from './components/Header/Header';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import {Route, HashRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
