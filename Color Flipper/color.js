const colors = ["darkorchid","lightcoral","midnightblue","coral"," darkslategrey","burlywood"];
var body = document.getElementById("body");
var changeText = document.getElementById("bgColor");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  var randomNumber = getRandomNumber();
  body.style.backgroundColor = colors[randomNumber];
  changeText.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
