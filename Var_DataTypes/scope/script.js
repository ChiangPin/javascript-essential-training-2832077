/**
 * Scope and the var statement
 * Because var is GLOBALLY scoped, even if we changing inside the function, it will change apply everywhere!
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue"; // When var and scope collide!

function headingColor() {
    color = "blue";
    document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;


