import React, { useEffect } from "react";
import "./customTheme.scss"
import "./assets/css/styles.css"
import Auth from "./pages/Auth";
import userStore from "../src/stores/userStore";

import {  observer } from "mobx-react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";

import Landing from "./components/landing";
import { API, setAuthToken } from "./api/api";



function App ()  {
	const loginStatus  = userStore.state.isLogin

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		if (!loginStatus && !localStorage.token) {
			return navigate("/");
		} else {
			userStore.setState()
			return navigate("/landing");
		}
	}, [loginStatus]);
	
	return (
		
		<>
		<Routes>
			<Route exact path="/" element={<Auth  />} />
			<Route exact path="/landing" element={<Landing  />} />
		</Routes>
			
		</>
	);
}

export default observer(App);
