import {
BrowserRouter,
Switch,
Route,
Redirect,
Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import LoginForm from "./LoginForm.jsx";
import JobForm from "./JobForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import Jobs from "./Jobs.jsx"
import Profile from "./Profile.jsx"
import { render } from "react-dom";
import { BreadcrumbSection } from "semantic-ui-react";
import SideBar from './SideBar.jsx'
class App extends Component {
	constructor(props) {
		super(props);
		
	  }

	render() {
		return (
		<div>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<JobForm />}>
					</Route>
					<Route path="/login" element={<LoginForm />}>
					</Route>
					<Route path="/signup" element={<SignUpForm />}>
					</Route>
					<Route path="/jobs" element={<Jobs />}>
					</Route>
					<Route path="/profile" element={<Profile/>}>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	


		);
	}
}

export default App;
