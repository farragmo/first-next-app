import Link from 'next/link'
import React from 'react'
import { Navbar, Container, Nav, } from 'react-bootstrap'


const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#'> <Link href="/">Home</Link></Nav.Link>
            <Nav.Link href="#"><Link href="/about">About</Link></Nav.Link>
            <Nav.Link href="#"><Link href="/posts">Posts</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainNavbar
