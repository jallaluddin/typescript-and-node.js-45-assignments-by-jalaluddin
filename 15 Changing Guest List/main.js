// aasignment no 15
//Changing Guest List
var guestList = ["jalal", "shehzad", "ikhlas", "ilyas", "rehmat alam"];
// print the name who can`t make the dinner
var unableAttend = guestList.splice(1, 1)[0];
console.log("".concat(unableAttend, "cant make dinner"));
// push
guestList.push("daniyal");
// console.log(guestList);
// print the message
guestList.forEach(function (guest) {
    console.log("dear".concat(guest, ", you are cordially invited"));
});
