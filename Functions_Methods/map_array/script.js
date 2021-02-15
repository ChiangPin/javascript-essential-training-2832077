/**
 * The map() array method.
 * Take old array, do smtg to each of the items in the array, then return each of the item into new array
 * Specifically for when you need to create a new array to do something further with the data
 * if just want to iterate the array, use foreach instead
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// map() through the stuff array to make a new stuffItems array.
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

// Append each element from the stuffItems array to the stuffList <ul>
stuffItems.forEach((item) => {
  stuffList.append(item);
});

// Append stuffList to the <article>
console.log("stuff:", stuff);
console.log("stuffItems:", stuffItems);
article.append(stuffList);
