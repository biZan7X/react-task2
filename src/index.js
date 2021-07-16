import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


  

function timeDisplay(){
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}


setInterval(timeDisplay,1000)