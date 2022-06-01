import * as React from "react";
import { Slider } from "@material-ui/core";

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
});

function adjustSwords(value1, value2, value3, value4, value5){
	document.getElementById("agility-sword").style.transform = "scaleX(-1.35) rotateY(30deg) perspective(200px) TranslateX("+value1+"px)";
	document.getElementById("stealth-sword").style.transform = "scaleX(-1.35) rotateY(30deg) perspective(200px) TranslateX("+value2+"px)";
	document.getElementById("char-sword").style.transform = "scaleX(-1.35) rotateY(30deg) perspective(200px) TranslateX("+value3+"px)";
	document.getElementById("intel-sword").style.transform = "scaleX(-1.35) rotateY(30deg) perspective(200px) TranslateX("+value4+"px)";
	document.getElementById("strength-sword").style.transform = "scaleX(-1.35) rotateY(30deg) perspective(200px) TranslateX("+value5+"px)";
}

export default function RangeSlider() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
	switch(newValue){
		case 1:
			adjustSwords(175, 150, 20, 100, 60);
      document.getElementsByClassName("puglasAdult")[0].style.opacity = "0";
      document.getElementsByClassName("puglasTeen")[0].style.opacity = "0";
      document.getElementsByClassName("puglasKid")[0].style.opacity = "1";
		break;
		case 2:
			adjustSwords(35, -30, -35, 40, -10);
      document.getElementsByClassName("puglasAdult")[0].style.opacity = "0";
      document.getElementsByClassName("puglasTeen")[0].style.opacity = "1";
      document.getElementsByClassName("puglasKid")[0].style.opacity = "0";
		break;
		case 3:
			adjustSwords(-120, -300, -150, 0, -220);
      document.getElementsByClassName("puglasAdult")[0].style.opacity = "1";
      document.getElementsByClassName("puglasTeen")[0].style.opacity = "0";
      document.getElementsByClassName("puglasKid")[0].style.opacity = "0";
		break;
		default:
			adjustSwords(175, 150, 20, 100, 60);
		break;
	}
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