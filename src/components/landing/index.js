import React, { useEffect } from "react";
import NavbarUser from "../navbars/navbarUser";
import { observer } from "mobx-react";
import userStore from "../../stores/userStore";

function Landing() {
	const userData = userStore.state.user;

	return (
		<div>
			<NavbarUser />
			<div className="text-center my-5 p-5 text-center">
				<h1 >Wellcome</h1>
				<h3>{userData.fullname}</h3>
				<p>{userData.email}</p>
			</div>
		</div>
	);
}

export default observer(Landing);
