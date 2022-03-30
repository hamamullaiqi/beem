import React, { useState } from "react";
import { Button, Stack, Form, Alert } from "react-bootstrap";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/userStore";

function Register(props) {
	const navigate = useNavigate();
	
	const loginStatus  = userStore.state.isLogin
	// console.log(user);
	console.log(userStore.state.user.fullname);

	const [message, setMessage] = useState(null);

	const [form, setForm] = useState({
		fullname: "",
		email: "",
		password: "",
	});

	const onChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleRegis = () => {

		userStore.register(form)
		.then((finalResult) => {
			console.log(finalResult);
			const alert = (
				<Alert
					variant="danger"
					onClose={() => setMessage(false)}
					dismissible
					style={{ fontSize: "14px" }}
				>
					{finalResult}
				</Alert>
			);
			setMessage(alert);
		});

		if (loginStatus && localStorage.token) {
			navigate("/landing");
		}
	};

	return (
		<Stack gap={4} className="mx-auto col-lg-7 p-lg-0 p-4 ">
			<h2 className="text-danger mt-lg-5 my-2">Sign Up to Beam Space</h2>
			
			{message && message}
			<Form>
				<Form.Group className="mb-4">
					<Form.Label>
						Full Name<span className="text-danger">*</span>
					</Form.Label>
					<Form.Control
						name="fullname"
						onChange={onChange}
						className="p-2 inShadow"
						type="text"
						placeholder="Enter your Full Name"
					/>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>
						Email address<span className="text-danger">*</span>
					</Form.Label>
					<Form.Control
						name="email"
						onChange={onChange}
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
						name="password"
						onChange={onChange}
						className="p-2 bg-white inShadow"
						type="password"
						placeholder="Enter your password"
					/>
				</Form.Group>
			</Form>
			<Button
				onClick={handleRegis}
				variant="danger"
				className="shadow text-white p-lg-2 p-3"
			>
				Register
			</Button>

			<span className="text-center">
				Have an account ?{" "}
				<span
					onClick={props.handleSwitch}
					style={{ color: "#00ACEE", cursor: "pointer" }}
				>
					Login
				</span>
			</span>
		</Stack>
	);
}

export default observer(Register);
