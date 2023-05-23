import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
