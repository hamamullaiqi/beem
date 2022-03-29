import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../assets/logo/logo.svg";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

function Auth() {

    const [switchAuth, setSwitchAuth] = useState(true)

    const handleSwitch = () => {
        setSwitchAuth(!switchAuth)
    }

	return (
		<div>
			<Container fluid>
				<Row className="row g-0">
					<Col lg={6} className="position-relative">
						<div className="hero">
							<div className="p-4 px-lg-5 text-hero">
								<img src={Logo} alt="logo" width="120rem" />
								<h2 className="text-white mt-5">
									Enjoy the Convenience of <br /> Beam Space Storage
								</h2>
							</div>
						</div>
					</Col>
					<Col lg={6} style={{ backgroundColor: "#FAFBFF", fontWeight: "500" }}>

                        {switchAuth ? <Login handleSwitch={handleSwitch} /> : <Register handleSwitch={handleSwitch} /> }
                        
						
					</Col>
				</Row >
			</Container>
		</div>
	);
}

export default Auth;
