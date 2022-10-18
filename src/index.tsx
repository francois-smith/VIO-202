import React from 'react';
import ReactDOM from "react-dom/client";
import './fonts/PfefferMediaeval.otf';
import './font.css';
import App from './app';

let lastScroll = window.scrollY;
window.onscroll = function() {
	const burger = document.getElementsByClassName(
		'bm-burger-button',
	) as HTMLCollectionOf<HTMLElement>;
	if(window.scrollY > lastScroll) {
		burger[0].style.opacity = "0";
	}
	else {
		burger[0].style.opacity = "1";
	}
	lastScroll = window.scrollY;
} 

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);