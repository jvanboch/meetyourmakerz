import Component1 from '../Components/Component1.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <Component1/>,
  document.getElementById('DescriptionandStandards')
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);