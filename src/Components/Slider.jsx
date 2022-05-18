import * as React from "react";
import { Slider } from "@material-ui/core";
import PuglasKid from '../Media/Images/Puglas_Kid.svg';
import PuglasTeen from '../Media/Images/Puglas_Teen.svg';
import PuglasAdult from '../Media/Images/Puglas_Adult.svg';

const difficulty = [
  {
    value: 1,
    scaledValue: 1,
    label: "Kid"
  },
  {
    value: 2,
    scaledValue: 2,
    label: "Teenager"
  },
  {
    value: 3,
    scaledValue: 3,
    label: "Adult"
  }
];

document.addEventListener("DOMContentLoaded", function(event) {
	adjustSwords(175, 150, 20, 100, 60);
	let puglas = document.getElementById("puglas");
	puglas.src = PuglasKid;
	puglas.style = "height: 375px; position: absolute; bottom: 185px; left: 100px;";
});

function adjustSwords(value1, value2, value3, value4, value5){
	document.getElementById("agility-sword").style.transform = "scaleX(-1) rotateY(30deg) perspective(200px) TranslateX("+value1+"px)";
	document.getElementById("stealth-sword").style.transform = "scaleX(-1) rotateY(30deg) perspective(200px) TranslateX("+value2+"px)";
	document.getElementById("char-sword").style.transform = "scaleX(-1) rotateY(30deg) perspective(200px) TranslateX("+value3+"px)";
	document.getElementById("intel-sword").style.transform = "scaleX(-1) rotateY(30deg) perspective(200px) TranslateX("+value4+"px)";
	document.getElementById("strength-sword").style.transform = "scaleX(-1) rotateY(30deg) perspective(200px) TranslateX("+value5+"px)";
}

export default function RangeSlider() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
	let puglas = document.getElementById("puglas");
	switch(newValue){
		case 1:
			adjustSwords(175, 150, 20, 100, 60);
			puglas.src = PuglasKid;
			puglas.style = "height: 425px; position: absolute; bottom: 185px; left: 100px;";
		break;
		case 2:
			adjustSwords(35, -30, -35, 40, -10);
			puglas.src = PuglasTeen;
			puglas.style = "height: 475px; position: absolute; bottom:185px; left: -40px;";
		break;
		case 3:
			adjustSwords(-120, -300, -150, 0, -220);
			puglas.src = PuglasAdult;
			puglas.style = "height: 525px; position: absolute; bottom: 185px; left: 25px;";
		break;
		default:
			adjustSwords(175, 150, 20, 100, 60);
		break;
	}
	console.log(newValue);
  };

  return (
    <>
        <Slider
          getAriaLabel={() => "Life State"}
          value={value}
          step={1}
          marks={difficulty}
          min={1}
          max={3}
          onChange={handleChange}
        />
    </>
  );
}
