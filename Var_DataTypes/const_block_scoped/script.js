/**
 * The const statement
 * Can change property but cannot REASSIGN the whole constant
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

const color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let color = "blue";
  document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;