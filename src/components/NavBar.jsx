import { CartWidget } from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
	<>
		<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
			<Container fluid>
				<Navbar.Brand to="/" as={NavLink}>
					<h1>Argentech</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link to="/category/Merchandising" as={NavLink}>
							Merchandising
						</Nav.Link>
						<Nav.Link to="/category/Tickets" as={NavLink}>
							Tickets
						</Nav.Link>
						<Nav.Link to="/category/Music" as={NavLink}>
							Music
						</Nav.Link>
					</Nav>
					<CartWidget />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</>
);
