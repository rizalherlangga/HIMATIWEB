import {Navbar, Container, Nav,NavDropdown, Form, Button} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant ="dark" expand="lg">
            <Container >
                <Navbar.Brand href="#">HIMA TI</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">HOME</Nav.Link>
                        <Nav.Link href="#action2">TENTANG</Nav.Link>
                        <NavDropdown title="MAHASISWA" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">PKM</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">MBKM</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "INFORMASI" id = "navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Edaran</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Kalender Akademik</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Jadwal Kuliah</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                    <Button variant="light">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar