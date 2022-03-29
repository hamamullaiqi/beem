import React from "react";
import { Button, Stack, Form } from "react-bootstrap";

function Register(props) {
	return (
		<Stack gap={4} className="mx-auto col-lg-7 p-lg-0 p-4 ">
			<h2 className="text-danger mt-lg-5 my-2">Sign Up to Beam Space</h2>
			<Form>
				<Form.Group className="mb-4">
					<Form.Label>
						Full Name<span className="text-danger">*</span>
					</Form.Label>
					<Form.Control
						className="p-2 inShadow"
						type="text"
						placeholder="Enter your password"
					/>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>
						Email address<span className="text-danger">*</span>
					</Form.Label>
					<Form.Control
						className="p-2 inShadow"
						type="email"
						placeholder="E.g, name@email.com"
					/>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>
						Password<span className="text-danger">*</span>
					</Form.Label>

					<Form.Control
						className="p-2 bg-white inShadow"
						type="password"
						placeholder="Enter your password"
					/>
				</Form.Group>
			</Form>
			<Button variant="danger" className="shadow text-white p-lg-2 p-3">
				Register
			</Button>

			<span className="text-center">
				Have an account ?{" "}
				<span onClick={props.handleSwitch} style={{ color: "#00ACEE", cursor:"pointer" }}>
					Login
				</span>
			</span>
		</Stack>
	);
}

export default Register;
