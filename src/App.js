import logo from './logo.svg';
import './App.css';
import Home from './pages/homePage';
import Navbar from './components/Navbar';
import HomeBody from './pages/homePageBody';

function App() {
  return (
    <>
      <div>
        <Navbar />
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
