import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from './Components/Slider';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Slider/>
    <Card/>
    <Footer/>
    <Routes>
        <Route path="/" component={HomePage} />
        </Routes>
    </div>
  );
}

export default App;
