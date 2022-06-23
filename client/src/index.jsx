import App from '../Components/App.jsx'
import LoginForm from '../Components/LoginForm.jsx'
import JobForm from '../Components/JobForm.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);



// ReactDOM.render((
//   <BrowserRouter>
//     <App/>,
//   </BrowserRouter>),
//   document.getElementById('root')
// );
