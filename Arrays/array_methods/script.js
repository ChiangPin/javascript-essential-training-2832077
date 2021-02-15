/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

// backpackContents.push("pencil", 5);
// backpackContents.unshift("First Item", "second Item");
// backpackContents.shift();
// backpackContents.pop();
// console.log(backpackContents.join(" | "));

/**
 * Manipulating the each content of the array, do something, without touching the array itself
 */
// backpackContents.forEach(function (item) {
//     item = `<li>${item}</li>`;
//     console.log(item);
// });
// console.log(backpackContents);

//return first element from the array
let longItems = backpackContents.find(function (item) {
    if (item.length >= 6) {
        return item;
    }
});
console.log("longItems:", longItems);
