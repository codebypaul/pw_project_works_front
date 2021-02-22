import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default function NavBar(){
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">PW Project Works</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/services#SEO_Strategies">SEO Strategies</NavDropdown.Item>
        <NavDropdown.Item href="/services#Mobile_applications">Mobile Applications</NavDropdown.Item>
        <NavDropdown.Item href="/services#Full_Stack_Applications">Full Stack Applications</NavDropdown.Item>
        <NavDropdown.Item href="/services#Landing_pages">Landing Pages</NavDropdown.Item>
        <NavDropdown.Item href="/services#Social_Media_Automation">Social Media Automation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/build_your_own">Business Solution Software</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/contact_us">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}