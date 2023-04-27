import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';

function App() {
  let navRoute
  switch (window.location.pathname) {
    case "/":
      navRoute = <Home />;
      break;
    case "/login":
      navRoute = <LoginPage />;
      break;
    case "/registration":
      navRoute = <RegistrationPage />;
      break;
  }
  return (
    <>
      <div>
        <Navbar />
        {navRoute}
      </div>
    </>
  );
}

export default App;
