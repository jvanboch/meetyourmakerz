import App from '../Components/App.jsx'
import Profile from '../Components/Profile.jsx'
import LoginForm from '../Components/LoginForm.jsx'
import JobForm from '../Components/JobForm.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
ReactDOM.render(
    <App/>,

  document.getElementById('root')
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

// ReactDOM.render((
//   <BrowserRouter>
//     <App/>,
//   </BrowserRouter>),
//   document.getElementById('root')
// );
