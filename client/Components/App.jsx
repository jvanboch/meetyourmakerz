import {
BrowserRouter,
Switch,
Route,
Redirect,
Routes,
} from "react-router-dom";

import React, { createContext, useEffect, useState } from 'react'
import LoginForm from "./LoginForm.jsx";
import JobForm from "./JobForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import Jobs from "./Jobs.jsx"
import Profile from "./Profile.jsx"
import { render } from "react-dom";
import { BreadcrumbSection } from "semantic-ui-react";
import SideBar from './SideBar.jsx'
import UserContext from './Context.jsx'


function App() {
	
	const [context, setContext] = useState("default context value");
	
		return (
		<UserContext.Provider value={[context, setContext]}>
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
		</UserContext.Provider>


		);
	}

export default App;
