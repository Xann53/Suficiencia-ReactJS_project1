import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../components/Component.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">XANN AND PARTNERSHIP CORPORATION</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/"><button class="NavButton">Home</button></NavLink>
            <NavLink to="/login"><button class="NavButton">Login</button></NavLink>
            <NavLink to="/registration"><button class="NavButton">Registration</button></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;