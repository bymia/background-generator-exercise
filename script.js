var currentCss = document.querySelector("h3");
var inputColor1 = document.querySelector(".color1");
var inputColor2 = document.querySelector(".color2");
var body = document.getElementById("gradient");//body in body tag
var rightArrow = document.querySelector(".right");
var leftArrow = document.querySelector(".left");

function getRandomColor() {
   var letters = "0123456789ABCDEF";
   var color = "#";

   for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ inputColor1.value 
	+ ", " 
	+ inputColor2.value 
	+ ")";//syntax

	currentCss.textContent = body.style.background + ";";
}

function setRandomGradient() {
    var randomColor2 = getRandomColor();

    body.style.background = 
    "linear-gradient(to right, " 
    + inputColor1.value 
    + ", " 
    + randomColor2 
    + ")";
    inputColor2.value = randomColor2;
    currentCss.textContent = body.style.backgroundImage + ";";
}

function setPreviousGradient() {
    var randomColor1 = getRandomColor();
 
    body.style.background = 
    "linear-gradient(to right, " 
    + randomColor1 
    + ", " 
    + inputColor2.value 
    + ")";
    inputColor1.value = randomColor1;
    currentCss.textContent = body.style.backgroundImage + ";";
}

inputColor1.addEventListener("input", setGradient);
inputColor2.addEventListener("input", setGradient);
rightArrow.addEventListener("click", setRandomGradient);
leftArrow.addEventListener("click", setPreviousGradient);