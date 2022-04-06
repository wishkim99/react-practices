import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import BootstrapTable from './BootstrapTable';
import './assets/css/styles.css'
//import './App.css';
									
function App() {									
  return (									
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

      <BootstrapTable /> 	

       <nav class="nav">
            <div>
                <div class="nav__brand">
                    <ion-icon name="menu-outline" class="nav__toggle" id="nav-toggle"></ion-icon>
                    <a href="#" class="nav__logo">Bedimcode</a>
                </div>
                <div class="nav__list">
                    <a href="#" class="nav__link active">
                        <ion-icon name="home-outline" class="nav__icon"></ion-icon>
                        <span class="nav_name">Dashboard</span>
                    </a>
                    <a href="#" class="nav__link">
                        <ion-icon name="chatbubbles-outline" class="nav__icon"></ion-icon>
                        <span class="nav_name">Messenger</span>
                    </a>

                    <div href="#" class="nav__link collapse">
                        <ion-icon name="folder-outline" class="nav__icon"></ion-icon>
                        <span class="nav_name">Projects</span>

                        <ion-icon name="chevron-down-outline" class="collapse__link"></ion-icon>

                        <ul class="collapse__menu">
                            <a href="#" class="collapse__sublink">Data</a>
                            <a href="#" class="collapse__sublink">Group</a>
                            <a href="#" class="collapse__sublink">Members</a>
                        </ul>
                    </div>

                    <a href="#" class="nav__link">
                        <ion-icon name="pie-chart-outline" class="nav__icon"></ion-icon>
                        <span class="nav_name">Analytics</span>
                    </a>

                    <div href="#" class="nav__link collapse">
                        <ion-icon name="people-outline" class="nav__icon"></ion-icon>
                        <span class="nav_name">Team</span>

                        <ion-icon name="chevron-down-outline" class="collapse__link"></ion-icon>

                        <ul class="collapse__menu">
                            <a href="#" class="collapse__sublink">Data</a>
                            <a href="#" class="collapse__sublink">Group</a>
                            <a href="#" class="collapse__sublink">Members</a>
                        </ul>
                    </div>

                    <a href="#" class="nav__link">
                        <ion-icon name="settings-outline" class="nav__icon"></ion-icon>
                        <span class="nav_name">Settings</span>
                    </a>
                </div>
                <a href="#" class="nav__link">
                    <ion-icon name="log-out-outline" class="nav__icon"></ion-icon>
                    <span class="nav_name">Log out</span>
                </a>
            </div>
        </nav>					
    </div>		
    
    
  );
  
 
}									
									
export default App;