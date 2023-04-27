import logo from './logo.svg';
import './App.css';
import Home from './pages/homePage';
import Navbar from './components/Navbar';
import HomeBody from './pages/homePageBody';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" elements={<LoginPage />} />
          <Route path="/registration" elements={<RegistrationPage />} />
        </Routes>
        <header className="App-header">
          <Home />
        </header>
      </div>
      <div class='b'></div>
      <div class='c'></div>
      <div class='bg'><HomeBody /></div>
    </>
  );
}

export default App;
