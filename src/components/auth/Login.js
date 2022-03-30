import React, { useState } from "react";
import { Button, Stack, Form, Alert } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import Fb from "../../assets/logo/fb.svg";
import Go from "../../assets/logo/google.svg";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/userStore";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function Login(props) {
	const navigate = useNavigate();
	const loginStatus = userStore.state.isLogin;

	const [message, setMessage] = useState(null);

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = () => {
		userStore.login(form).then((finalResult) => {
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

	const handleLoginFb = (data) => {
		const dataUser = {
			fullname: data.name,
			email: data.email,
			image: data.picture.data.url,
		};

		const body = JSON.stringify(dataUser);
		console.log(body);
		userStore.loginSocial(body);
	}

	const handleLoginGoogle = (data) => {
		const dataUser = {
			fullname: data.profileObj.name,
			email: data.profileObj.email,
			image: data.profileObj.imageUrl,
		};

		const body = JSON.stringify(dataUser);
		console.log(body);
		userStore.loginSocial(body);
		// console.log(JSON.stringify({data : data.profileObj}));
		// console.log(JSON.stringify({token : data.tokenId}));
		// localStorage.setItem("user", JSON.stringify(response.data.data.user));
	};

	const handleFailure = (result) => {
		console.log(JSON.stringify(result))
	};

	return (
		<Stack gap={4} className="mx-auto col-lg-7 p-lg-0 p-4 ">
			<h2 className="text-danger my-lg-3 my-2">Log in to Beam Space</h2>
			<GoogleLogin
				clientId="921972621968-6m1ilt9k9h9qfg5kl50tsn5s5eolni5r.apps.googleusercontent.com"
				// buttonText="Get started with Google"

				render={(renderProps) => (
					<button
						className="btn-white shadow-sm p-lg-2 p-3"
						onClick={renderProps.onClick}
						
					>
						<img
							src={Go}
							alt="Go"
							width={20}
							className="mx-2 text-center"
						/>
						Get started with Google
					</button>
				)}
				onSuccess={handleLoginGoogle}
				onFailure={handleFailure}
				cookiePolicy={"single_host_origin"}
				className="btn-white text-center"
			/>
			<FacebookLogin
				appId="1138010243621986"
				autoLoad={false}
				fields="name,email,picture"
				scope="public_profile,user_friends"
				callback={handleLoginFb}
				cssClass="shadow-sm p-lg-2 p-3 btn-blue rounded-3 w-100"
				icon="fa-facebook"
				textButton=" Get started with Facebook"
			/>

			<div className="position-relative">
				<hr />
				<p
					className="position-absolute top-50 p-lg-2  start-50 translate-middle"
					style={{ backgroundColor: "#FAFBFF", color: "#B1B1B1" }}
				>
					or login with your email
				</p>
			</div>
			{message && message}
			<Form>
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
				onClick={handleLogin}
				variant="danger"
				className="shadow text-white p-lg-2 p-3"
			>
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

export default observer(Login);
