import React, { useEffect } from "react";
import { Navbar, Container, Stack, Nav, Button } from "react-bootstrap";
import Logo from "../../../assets/logo//logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import userStore from "../../../stores/userStore";

function NavbarUser() {
	const handleLogout = () => {
		userStore.logout();
	};

	return (
		<Navbar bg="danger" className="shadow  px-3">
			<Container className="justify-content-between align-items-center">
				<Navbar.Brand>
					<Link to="/">
						<img src={Logo} alt="logo" width="120rem" />
					</Link>
				</Navbar.Brand>
				<Nav>
					<Stack>
						<Button onClick={handleLogout} className="btn-white">
							LogOut
						</Button>
					</Stack>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default observer(NavbarUser);
