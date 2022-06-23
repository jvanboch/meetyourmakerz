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
import { render } from "react-dom";
import { BreadcrumbSection } from "semantic-ui-react";

class App extends Component {
	render() {
		return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<JobForm />}>
					</Route>
					<Route path="/login" element={<LoginForm />}>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	


		);
	}
}

export default App;
