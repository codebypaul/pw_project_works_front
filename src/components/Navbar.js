import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import logo from '../images/logo.png'
import {useState} from 'react'

export default function NavBar(){
  const [navbar,setNavbar] = useState(false)

  const navScroll = () => {
    if (window.scrollY > 300){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',navScroll)
    return (
        <Navbar className={navbar ? 'navbar active' : 'navbar'} expand="lg" sticky='top'>
          <Navbar.Brand href="/">
          <img src={logo} alt="" className='nav-logo'/>
          PW Project Works</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right">
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
            <div className="d-flex justify-content-end">
              <Form inline className=''>
                <FormControl type="text" placeholder="Search" className="mr-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Navbar>
    )
}