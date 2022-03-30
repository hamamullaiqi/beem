import { action, observable, runInAction } from "mobx";
import { API } from "../api/api";


const userStore = observable({
	state: {
		isLogin: false,
		user: {},
	},
	register: action(async (data) => {
		try {
			const config = {
				headers: {
					"content-type": "application/json",
				},
			};
			
			const body = JSON.stringify(data)

			const response = await API.post("/register", body, config);
			console.log(response);

			runInAction( () => {
			if (response?.status === 201) {
				localStorage.setItem("token", response.data.data.user.token);
				localStorage.setItem("user", JSON.stringify(response.data.data.user));
				userStore.state = {
					...userStore.state,
					isLogin: true,
					user: response.data.data.user
			
				};
			}
			});
		} catch (error) {
			console.log(error);
			return error.response.data.error.message;
		}
	}),
	login: action(async (data) => {
		try {
			const config = {
				headers: {
					"content-type": "application/json",
				},
			};
			
			const body = JSON.stringify(data)

			const response = await API.post("/login", body, config);
			console.log(response);

			runInAction( () => {
			if (response?.status === 200) {
				localStorage.setItem("token", response.data.data.user.token);
				localStorage.setItem("user", JSON.stringify(response.data.data.user));
				userStore.state = {
					...userStore.state,
					isLogin: true,
					user: JSON.parse(localStorage.getItem("user"))
			
				};
			}
			});
		} catch (error) {
			console.log(error);
			return error.response.data.message;
		}
	}),
	loginSocial: action(async (data) => {
		try {
			const config = {
				headers: {
					"content-type": "application/json",
				},
			};
			
			// const body = JSON.stringify(data)

			const response = await API.post("/login-google", data, config);
			console.log(response);

			runInAction( () => {
			if (response?.status === 200) {
				localStorage.setItem("token", response.data.data.user.token);
				localStorage.setItem("user", JSON.stringify(response.data.data.user));
				userStore.state = {
					...userStore.state,
					isLogin: true,
					user: JSON.parse(localStorage.getItem("user"))
			
				};
			}
			});
		} catch (error) {
			console.log(error);
			return error.response.data.message;
		}
	}),
	logout : action(() => {
		localStorage.clear()
		userStore.state = {
			...userStore.state,
			isLogin: false,
			user: {}
	
		};
	}),
	setState : action(() => {
		userStore.state = {
			...userStore.state,
			isLogin: true,
			user: JSON.parse(localStorage.getItem("user"))
	
		};
	})
});

export default userStore;

// import {
// 	action,
// 	computed,
// 	makeObservable,
// 	observable,
// 	runInAction,
// } from "mobx";
// import { useNavigate } from "react-router-dom";

// import { API } from "../api/api";

// class UserStore {
// 	initialStore = {
// 		isLogin: false,
// 		user: {},
// 	};

// 	constructor() {
// 		makeObservable(this, {
// 			initialStore: observable,
// 			userRegister: action,
// 			userLogin: action,
// 			user: computed,
// 		});
// 	}

// 	async userLogin(e) {
//         UserStore.initialStore = {
//             isLogin: false,
//             user : {}
//         };

// 		try {
// 			const config = {
// 				headers: {
// 					"content-type": "application/json",
// 				},
// 			};

// 			const response = await API.post("/login", e, config);
// 			console.log(response);

// 			runInAction( () => {
// 				if (response?.status === 200) {

// 					localStorage.setItem("token", response.data.data.user.token);
// 					this.initialStore = {
// 						...this.initialStore,
// 						isLogin: true,
// 						user: response.data.data.user.fullname,
// 					};
// 				}
// 			});
// 		} catch (error) {
//             console.log(error);
// 			return error.response.data.message;

// 		}
// 	}
// 	async userRegister(e) {
// 		try {
// 			const config = {
// 				headers: {
// 					"content-type": "application/json",
// 				},
// 			};

// 			const response = await API.post("/register", e, config);

// 			runInAction(() => {
// 				if (response?.status === 201) {
// 					localStorage.setItem("token", response.data.data.user.token);
// 					this.initialStore = {
// 						...this.initialStore,
// 						isLogin: true,
// 						user: response.data.data.user
// 					};
// 				}
// 			});
//             return response.status
// 		} catch (error) {
// 			return error.response.data.error.message;
// 		}
// 	}

// 	get user() {
//         console.log(this.initialStore.user);
// 		return this.initialStore;
// 	}
// }

// export default UserStore;
