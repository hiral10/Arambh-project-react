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
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
   <Header/>
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/Gallery" element={<Gallery/>}></Route>
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
