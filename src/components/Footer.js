import {Navbar, Container} from 'react-bootstrap'

const Footer = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HIMA TI UHAMKA</Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Copyright Allright reserved<a href="#login">2022</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Footer