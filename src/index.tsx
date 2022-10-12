import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
