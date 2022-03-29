import React from "react";
import { Button, Stack, Form } from "react-bootstrap";
import Fb from "../../assets/logo/fb.svg";
import Go from "../../assets/logo/google.svg";

function Login(props) {
	return (
		<Stack gap={4} className="mx-auto col-lg-7 p-lg-0 p-4 ">
			<h2 className="text-danger my-lg-3 my-2">Log in to Beam Space</h2>
			<Button className="shadow-sm p-lg-2 p-3 btn-white">
				<img src={Go} alt="go" width={20} height={20} className="mx-2" />
				Get started with Google
			</Button>
			<Button className="shadow-sm p-lg-2 p-3 btn-blue">
				<img src={Fb} alt="fb" width={20} height={20} className="mx-2" />
				Get started with Facebook
			</Button>
			<div className="position-relative">
				<hr />
				<p
					className="position-absolute top-50 p-lg-2  start-50 translate-middle"
					style={{ backgroundColor: "#FAFBFF", color: "#B1B1B1" }}
				>
					or login with your email
				</p>
			</div>
			<Form>
				<Form.Group className="my-3">
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
				Login
			</Button>

			<span className="fw-bold text-center" style={{ color: "#00ACEE" }}>
				Forgot Password?
			</span>

			<span className="text-center">
				Don’t have an account?{" "}
				<span
					onClick={props.handleSwitch}
					style={{ color: "#00ACEE", cursor: "pointer" }}
				>
					Create an account
				</span>{" "}
			</span>
		</Stack>
	);
}

export default Login;
