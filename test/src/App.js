import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import './assets/css/styles.css';
//import './App.css';
import Sidebar from  "./Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {									
  return (									
    <Router>
    <div className="App">	
     						
      {/* NavBar */}									
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">									
        <Container>									
          <Navbar.Brand href="/">With POSCO</Navbar.Brand>									
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />									
          <Navbar.Collapse id="responsive-navbar-nav">									
            <Nav className="me-auto">									
              <Nav.Link href="/">내부회계관리 시스템</Nav.Link>																
            </Nav>		
            
            <Nav.Link href="#pricing"></Nav.Link>									
              <NavDropdown title="포스코" id="collasible-nav-dropdown">									
                <NavDropdown.Item href="#action/3.1">포스코ICT</NavDropdown.Item>									
                <NavDropdown.Item href="#action/3.2">포스코 인터네셔널</NavDropdown.Item>									
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>									
                <NavDropdown.Divider />									
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>									
              </NavDropdown>

             <Nav.Link href="#pricing"></Nav.Link>									
              <NavDropdown title="2021" id="collasible-nav-dropdown">									
                <NavDropdown.Item href="#action/3.1">2020</NavDropdown.Item>									
                <NavDropdown.Item href="#action/3.2">2019</NavDropdown.Item>									
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>									
                <NavDropdown.Divider />									
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>									
              </NavDropdown>									
            	

             <Nav.Link href="#pricing"></Nav.Link>									
              <NavDropdown title="한국어" id="collasible-nav-dropdown">									
                <NavDropdown.Item href="#action/3.1">영어</NavDropdown.Item>									
                <NavDropdown.Item href="#action/3.2">중국어</NavDropdown.Item>									
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>									
                <NavDropdown.Divider />									
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>									
              </NavDropdown>									
           
            <Nav>									
              <Nav.Link href="#login">로그인</Nav.Link>									
              <Nav.Link eventKey={2} href="#join">									
                회원가입									
              </Nav.Link>									
            </Nav>									
          </Navbar.Collapse>									
        </Container>									
      </Navbar>									
      {/* jumbotron */}									
      {/* cart contents */}									
      {/* more button */}			
      <Sidebar />		
     </div>
     </Router>
    
  );
  
 
}									
									
export default App;